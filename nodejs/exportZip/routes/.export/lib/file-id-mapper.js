var pathInfo = {"pRoot":"/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project","aPaths":["/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/about.html","/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/index.html","/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/register-sample.html","/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/query.html","/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/register.html"],"fInfo":{"infos":[{"id":"20140707-9b23-4ef9-969b-91182c1b43ae","path":"/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/about.html"},{"id":"20140707-1373-4ab1-be16-8bb71d9cd416","path":"/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/index.html"},{"id":"20140707-5b7c-4c55-b6b2-f1167cde6c66","path":"/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/register-sample.html"},{"id":"20140708-756f-4507-bf75-99dd7a108041","path":"/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/query.html"},{"id":"20140711-1c5c-4b38-957d-1c2f85f5f261","path":"/webida/fs/ekF4bYgLW/UIP-SnapshotTEST/exportZip/routes/.export/project/register.html"}]}};

var fileIDMapper = {
    LIB_NAME: {
        JQUERY: 'jquery-1.11.0.min.js',
        RUNNER: 'page-runner.js',
        FIELMAPPER: 'file-id-mapper.js'
    },

    _loadScript: function (url, cb, cbArgs) {
        'use strict';
        var script = document.createElement('script');
        script.type = 'text/javascript';

        if (script.readyState) {  //IE
            script.onreadystatechange = function(){
                if (script.readyState === 'loaded' ||
                    script.readyState === 'complete'){
                    script.onreadystatechange = null;
                    if (!!cb && typeof(cb) === 'function') {
                        if (!!cbArgs) {
                            cb(cbArgs);
                        } else {
                            cb();
                        }
                    }
                }
            };
        } else {  //Others
            script.onload = function () {
                if (!!cb && typeof(cb) === 'function') {
                    if (!!cbArgs) {
                        cb(cbArgs);
                    } else {
                        cb();
                    }
                }
            };
        }

        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
    },

    loadScripts: function (basePath, scriptList) {
        'use strict';
        function _loadChecker(info) {
            console.log('script load complete', info);
            cnt--;

            // all script load complete
            if (cnt === 0) {
                // event fire
                var evt = document.createEvent('Event');
                evt.initEvent('ScriptLoaded', true, true);
                document.dispatchEvent(evt);
            }
        }

        if (!scriptList) {
            return;
        }

        if (scriptList.length > 0) {
            var that = this;
            var path = basePath + scriptList.shift();
            this._loadScript(path, function (info) {
                console.log('script load complete', info.before);
                that.loadScripts(info.basePath, info.scriptList)
            }, {basePath: basePath, scriptList: scriptList, before: path});
        } else {
            var evt = document.createEvent('Event');
            evt.initEvent('ScriptLoaded', true, true);
            document.dispatchEvent(evt);
        }
    },

    getFilePath: function (id) {
        'use strict';
        if (!id) {
            return null;
        }

        var infos = pathInfo.fInfo.infos;
        for (var i = 0; i < infos.length; i++) {
            var info = infos[i];
            if (info.id === id) {
                return info.path;
            }
        }

        return null;
    },

    getFileName: function (path) {
        'use strict';
        if (!path) {
            return '';
        }
        return path.split('/').pop();
    },

    regFileIdMeta: new RegExp('\\suip-meta-fileid:(.+)\\s', 'm'),

    /**
     * @param {string} meta
     * @returns {string}
     **/
    parseIdMeta: function (meta) {
        'use strict';
        var fileidMatched = this.regFileIdMeta.exec(meta);
        if (fileidMatched) {
            return fileidMatched[1];
        } else {
            return undefined;
        }
    },

    getScriptSrcList: function () {
        'use strict';
        var scripts = document.scripts;
        var srcs = [];
        srcs.push('lib/jquery/' + this.LIB_NAME.JQUERY);
        var that = this;
        for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i];
            var src = script.getAttribute('src');
            if (!!src) {
                if (that.getFileName(src) === that.LIB_NAME.JQUERY ||
                    that.getFileName(src) === that.LIB_NAME.RUNNER ||
                    that.getFileName(src) === that.LIB_NAME.FIELMAPPER) {
                    continue;
                }
                srcs.push(src);
            }
        }
        srcs.push('lib/' + this.LIB_NAME.RUNNER);
        srcs.push('lib/' + that.LIB_NAME.FIELMAPPER);
        return srcs;
    },

    getComments: function (d, comments) {
        'use strict';
        if (!comments) {
            comments = [];
        }

        if (!d) {
            return;
        }
        if (d.nodeType === 8) {
            comments.push(d.data);
        }
        if (!d.childNodes) {
            return;
        }
        for (var i = 0; i < d.childNodes.length; i++) {
            this.getComments(d.childNodes[i], comments);
        }

        return comments;
    },

    getDepth: function () {
        'use strict';
        // find current file id
        var id, comments = this.getComments(document);
        if (comments.length > 0) {
            for (var i = 0; i < comments.length; i++) {
                id = this.parseIdMeta(comments[i]);
                if (!!id) {
                    break;
                }
            }
        }

        // find current file
        if (!!id) {
            var currentFileUIPPath = this.getFilePath(id);
            // can not find uip path
            if (!currentFileUIPPath) {
                return null;
            } else {
                // remove base path
                var uipPath = currentFileUIPPath.replace(pathInfo.pRoot, '');
                var uipPaths = uipPath.split('/');
                return uipPaths.length - 2;
            }
        }
        return -1;
    },

    getNewRoot: function (currentPathname) {
        'use strict';
        // find current file id
        var id, comments = this.getComments(document);
        if (comments.length > 0) {
            for (var i = 0; i < comments.length; i++) {
                id = this.parseIdMeta(comments[i]);
                if (!!id) {
                    break;
                }
            }
        }

        // find current file
        if (!!id) {
            var currentFileUIPPath = this.getFilePath(id);
            // can not find uip path
            if (!currentFileUIPPath) {
                return null;
            } else {
                // remove base path
                var uipPath = currentFileUIPPath.replace(pathInfo.pRoot, '');
                var uipPaths = uipPath.split('/');
                var curPaths = currentPathname.split('/');

                while (uipPaths.length > 0) {
                    var op = uipPaths.pop();
                    var dp = curPaths.pop();

                    if (op !== dp) {
                        curPaths.push(dp);
                        break;
                    }
                }

                return curPaths.join('/');
            }
        }
        return null;
    }
};

/**
 * chrome can not encodeURI '(' or' )' charactor
 */
document.addEventListener('DOMContentLoaded', function () {
    'use strict';
    var reload = false;
    var name = window.location.pathname;
    console.log(name);
    if (name.indexOf(')') > 0 || name.indexOf('(') > 0) {
        reload = true;
        name = name.replace(/\(/g, '%28');
        name = name.replace(/\)/g, '%29');
    }
    if (reload) {
        window.location.replace(name);
    }
});

document.addEventListener('ScriptLoaded', function () {
    'use strict';
    console.log('Script Loaded');
    var el = document.getElementsByTagName('body');
    uipRunner.realizeComponentAndDescendant(el);
});

window.addEventListener('message', function (event) {
    'use strict';
    function getFileName(path) {
        var names = path.split('/');
        var name = names.pop();
        return name;
    }

    var message = event.data.message;
    var value = event.data.value;

    if (message === 'pagemove') {
        var filepath = (filepath = fileIDMapper.getFilePath(value.id)) ? filepath : value.path;

        if (!filepath) {
            console.error('path is not defined');
            return;
        }
        filepath = filepath.replace(pathInfo.pRoot, '');
        var filename = getFileName(filepath);

        var origin = window.location.origin;
        var currentPathname = decodeURI(window.location.pathname);
        var rootPath = fileIDMapper.getNewRoot(currentPathname);

        if (!!rootPath) {
            // page move
            window.location = encodeURI(origin + rootPath + filepath);
        } else {
            console.error('Failed, can not find base path');
        }
    }
});



