var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var htmlparser = require('htmlparser2');
var render = require('./renderer');

var PageManager = function (paths) {
    this.fileIDMapper = {
        pRoot: '',
        aPaths: [],
        fInfo: {
            infos: [] // {id, path}
        }
    };
    this.paths = []; // [{path, stat, depth}, ...]
    this.fdWaitQueue = []; // handle wait queue
    this.fdProgressQueue = []; // handle progress queue
    this.fdCompleteQueue = []; // handle complete queue
    this.fdLimit = 5;
    this.complete = 0;
    this.total = 0;
    this.emitter = new EventEmitter();

    // init
    this.setPaths(paths);
};
(function () {
    function _applyCallback(cb) {
        if (!!cb && typeof(cb) === 'function') {
            if (arguments.length > 1) {
                cb(arguments[1]);
            } else {
                cb();
            }
        }
    }

    function _getName(path) {
        return path.split('/').pop();
    }

    function _getHTMLTextFromParser (dom) {
        return render(dom);
    }

    function insertString(index, oriStr, inStr) {
        if (index > 0) {
            return oriStr.substring(0, index) +
                inStr + oriStr.substring(index, oriStr.length);
        } else {
            return inStr + oriStr;
        }
    }

    this.write = function (cb) {
        var _self = this;
        var emitter = this.emitter;

        // read complete
        emitter.on('read-complete', function (err, data, path) {
            if (err) {
                emitter.emit('error', err);
                return;
            }
            //console.log('read-complete... > ', path.path);

            // parse start
            _self.parseFile(data, path);
        });

        // parse complete
        emitter.on('parse-complete', function (err, data, path) {
            if (err) {
                emitter.emit('error', err);
                return;
            }
            //console.log('parse-complete... > ', path.path);

            // write start
            _self.writeFile(path, data);
        });

        // write complete
        emitter.on('write-complete', function (err, path) {
            if (err) {
                emitter.emit('error', err);
                return;
            }
            console.log('write-complete... > ', path.path);

            // next file start
            _self.addCompleteQueue(path);
            _self.complete++;
            if (_self.complete === _self.total) {
                emitter.emit('all-complete');
            } else {
                _self._start();
            }
        });

        // all complete
        emitter.on('all-complete', function () {
            console.log('all complete... total >', _self.total, ', complete > ', _self.complete);
            _applyCallback(cb, null);
        });

        // falied
        emitter.on('error', function (err) {
            _applyCallback(cb, err);
        });

        if (this.total === 0) {
            emitter.emit('all-complete');
        } else {
            this._start();
        }

        return emitter;
    };

    this._start = function () {
        var _self = this;
        var queue = this.getQueue();

        for (var i = 0; i < queue.length; i++) {
            console.log('_start ...> ', queue[i].path);
            _self.readFile(queue[i]);
        }
    };

    this.getBasePath = function (depth) {
        var basePath = '';
        for (var i = 1; i < depth; i++) {
            basePath += '../';
        }
        return basePath;
    };

    this.parseIdMeta = function (meta) {
        var regFileIdMeta = new RegExp('\\suip-meta-fileid:(.+)\\s', 'm');
        var fileidMatched = regFileIdMeta.exec(meta);
        if (fileidMatched) {
            return fileidMatched[1];
        } else {
            return undefined;
        }
    };

    this. _setMappingInfo = function (info) {
        this.fileIDMapper.fInfo.infos.push(info);
    };

    this.parseFile = function (data, path) {
        var _self = this;
        var emitter = this.emitter;
        var handler = new htmlparser.DomHandler();

        // append <script src='../lib/file-id-mapper.js'></script>
        var index = data.indexOf("<script src='plugins/prototype-model/page-runner.js'></script>");
        var mapperStr = "<script src='lib/file-id-mapper.js'></script>\n\t\t";
        data = insertString(index, data, mapperStr);

        // parse
        handler.id = '';
        handler.oncomment = function(data){
            var lastTag = handler._tagStack[handler._tagStack.length - 1];

            if(lastTag && lastTag.type === htmlparser.ElementType.Comment){
                lastTag.data += data;
                return;
            }

            var element = {
                data: data,
                type: htmlparser.ElementType.Comment
            };
            handler.id = _self.parseIdMeta(data);

            handler._addDomElement(element);
            handler._tagStack.push(element);
        };

        handler.onopentag = function(name, attribs) {
            var element = {
                type: name === "script" ? htmlparser.ElementType.Script : name === "style" ? htmlparser.ElementType.Style : htmlparser.ElementType.Tag,
                name: name,
                attribs: attribs,
                children: []
            };

            var EXPORTSTR = {
                RUNNER: 'page-runner.js',
                MAPPER: 'file-id-mapper.js'
            };

            // resetting src or herf
            if (element.type === 'script' &&
                !!attribs.src) {
                if(_getName(attribs.src) === EXPORTSTR.RUNNER) {
                    attribs.src = _self.getBasePath(path.depth) +
                        'lib/' + EXPORTSTR.RUNNER;
                } else if (_getName(attribs.src) === EXPORTSTR.MAPPER) {
                    attribs.src = _self.getBasePath(path.depth) +
                        'lib/' + EXPORTSTR.MAPPER;
                } else {
                    attribs.src = _self.getBasePath(path.depth) + attribs.src;
                }
            } else if (element.type === 'tag' &&
                       element.name === 'link'&&
                       !!attribs.href) {
                attribs.href = _self.getBasePath(path.depth) + attribs.href;
            }

            handler._addDomElement(element);

            handler._tagStack.push(element);
        };

        var parser = new htmlparser.Parser(handler);
        parser.write(data);
        parser.done();

        _self._setMappingInfo({
            id: handler.id,
            path: path.path
        });
        var newData = _getHTMLTextFromParser(handler.dom);

        emitter.emit('parse-complete', null, newData, path);
    };

    this.readFile = function (path) {
        var emitter = this.emitter;
        fs.readFile(path.path, 'utf8', function (err, data) {
            if (err) {
                console.error(err);
            }

            emitter.emit('read-complete', err, data, path);
        });
    };

    this.writeFile = function (path, content) {
        var emitter = this.emitter;

        fs.open(path.path, 'w', function(err, fd) {
            if(err) {
                emitter.emit('write-complete', err);
            }
            var buf = new Buffer(content);
            fs.write(fd, buf, 0, buf.length, null, function(err, written, buffer) {
                if(err) {
                    emitter.emit('write-complete', err);
                }

                fs.close(fd, function() {
                    emitter.emit('write-complete', null, path);
                });
            });
        });
    };

    this.getDepth = function (path) {
        var depth;
        for (var i = 0; i < this.paths.length; i++) {
            if (this.paths[i].path === path) {
                depth = this.paths[i].depth;
                break;
            }
        }
        return depth;
    };

    this.setPaths = function (paths) {
        this.paths = paths;
        this.fdWaitQueue = paths;
        this.total = paths.length;
        for (var i = 0; i < paths.length; i++) {
            this.fileIDMapper.aPaths.push(paths[i].path);
        }
    };

    this.getQueue = function () {
        var len = this.fdProgressQueue.length, i = 0, data;
        var queue = [];
        if (len === 0) {
            for (i = 0; i < this.fdLimit; i++) {
                data = this.fdWaitQueue.shift();
                if (!!data) {
                    queue.push(data);
                    this.fdProgressQueue.push(data);
                }
            }
        } else if (len > 0 ) {
            for (i = len; i < this.fdLimit; i++) {
                data = this.fdWaitQueue.shift();
                if (!!data) {
                    queue.push(data);
                    this.fdProgressQueue.push(data);
                }
            }
        }
        return queue;
    };

    this.addCompleteQueue = function (path) {
        var _self = this;
        var len = _self.fdProgressQueue.length;
        for (var i = 0; i < len; i++) {
            var data = _self.fdProgressQueue[i];
            if (!!data && data.path === path.path) {
                _self.fdCompleteQueue.push(data);
                _self.fdProgressQueue.splice(i, 1);
                break;
            }
        }
    };

    this.setLimit = function (limit) {
        this.fdLimit = limit;
    };

}).call(PageManager.prototype);

module.exports = PageManager;
