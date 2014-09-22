// library setting
var async = require('async');
var asyncjs = require('asyncjs');
var fs = require('fs');
var fse = require('fs-extra');
var walkdir = require('walkdir');
var htmlparser = require('htmlparser2');
var render = require('./renderer');
var PageManager = require('./pageManager');
var ZipManager = require('./zipManager');
var common = require('./common');

function _applyCallback(cb) {
    if (!!cb && typeof(cb) === 'function') {
        cb();
    }
}

function _getName(path) {
    return path.split('/').pop();
}

function _getFileExtension(filename) {
    return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
}

function _isPageFile(name) {
    return (/\.(html|htm)$/i).test(name);
}

function _errorHandler(err, req, res, next) {
    console.log('server send error message...');
    res.status(500).send({ error: err});
    res.end();
}

function _getPageFileList(path, cb) {
    console.log('_getPageFileList called...');
    var paths = [];

    var emitter = walkdir(path, function(p, s, d) {
        if (!!s.isFile()) {
            var name = _getName(p);
            if (_isPageFile(name)) {
                paths.push({path: p, stat: s, depth: d});
            }
        }
    });

    emitter.on('end', function() {
        cb(paths);
    });
}

/**
 * like ls
 */
function _getPathList(path, cb) {
    asyncjs.readdir(path)
    .stat()
    .map(function (file, next) {
        next(null, file.path);
    })
    .toArray(function(err, paths) {
        cb(err, paths);
    });
}

/**
 * Export UIP Project to ZIP
 *
 * @param {Object} req.body_readAndWrite
 * @param {String} req.body.s - source project path
 * @param {String} req.body.t - source project type, file(f) or directory(d)
 * @param {String} req.body.r - page-runner.js file contents
 * @param {String} req.body.m - file-id-mapper.js file contents
 *
 * @param {Object} res.body
 *
 * @author Gyeongseok.Seo <gseok.seo@webida.org>
 * @since: 2014.09.18
 */
exports.exportUIPProject = function(req, res) {
    console.time('exportUIPProject');
    console.log('exportUIPProject start ----------------------');

    // input check
    var s = req.body.s;
    var t = req.body.t;
    var r = req.body.r;
    var m = req.body.m;
    if (!s || !t || !r || !m) {
        // wrong input
       _errorHandler(new Error('Wrong param passed...'), req, res);
        return;
    }

    async.waterfall([
        function(cb) {
            // remove previous content
            console.log('remove > ', common.PATH.projectStoragePath);
            fse.remove(common.PATH.projectStoragePath, function (err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                console.log('remove success... > ', common.PATH.projectStoragePath);
                cb(null);
            });
        },
        function(cb) {
            // remove previous output
            console.log('remove > ', common.PATH.outputPath);
            fse.remove(common.PATH.outputPath, function (err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                console.log('remove success... > ', common.PATH.outputPath);
                cb(null);
            });
        },
        function(cb) {
            // create export temp directory
            console.log('create > ', common.PATH.projectStoragePath);
            fse.mkdirs(common.PATH.projectStoragePath, function (err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                console.log('create cuccess... > ', common.PATH.projectStoragePath);
                cb(null);
            });
        },
        function(cb) {
            // create outputdirectory
            console.log('create > ', common.PATH.outputPath);
            fse.mkdirs(common.PATH.outputPath, function (err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                console.log('create cuccess... > ', common.PATH.outputPath);
                cb(null);
            });
        },
        function(cb) {
            // create runner
            console.log('create > ', common.PATH.runnerFilePath);
            fse.outputFile(common.PATH.runnerFilePath, r, function(err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                console.log('create cuccess... > ', common.PATH.runnerFilePath);
                cb(null);
            });
        },
        function(cb) {
            // copy src to export temp directory

            var src = common.PATH.webidaFsPath + s;
            var dest = common.PATH.projectStoragePath;
            if (t === 'f') {
                dest = dest + '/' + _getName(s);
            }
            console.log('copy > ', src);
            fse.copy(src, dest, function(err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                console.log('copy success...> ', src, ' to ', dest);
                cb(null);
            });
        },
        function(cb) {
            // get page file list
            _getPageFileList(common.PATH.projectStoragePath, function (paths) {
                cb(null, paths);
            });
        },
        function(paths, cb) {
            // page file parse and regenerate, file id info collect
            console.log('page file count...> ', paths.length);

            var pageManager = new PageManager(paths);
            pageManager.write(function (err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                cb(null, pageManager);
            });
        },
        function(pageManager, cb) {
            // create mapper
            console.log('create > ', common.PATH.mapperFilePath);
            pageManager.fileIDMapper.pRoot = common.PATH.projectStoragePath;
            var data = 'var pathInfo = ' + JSON.stringify(pageManager.fileIDMapper) + ';\n' + m;
            fse.outputFile(common.PATH.mapperFilePath, data, function(err) {
                if (err) {
                    _errorHandler(err, req, res);
                }
                console.log('create success... > ', common.PATH.mapperFilePath);
                cb(null);
            });
        },
        function(cb) {
            console.log('zip file create start...');
            console.time('createZipFile');

            // create zip file in service app directory
            var name = _getName(s);
            var zipManager = new ZipManager(name);
            zipManager.zip(function (err, zipPath, zipSize) {
                if (err) {
                    _errorHandler(err, req, res);
                } else {
                    // zip file create success then response client
                    console.timeEnd('createZipFile');
                    console.log('zip file create success');
                    console.log('zip path > ', zipPath, ', zip size > ', zipSize);
                    cb(null, zipPath, zipSize);
                }
            });
        },
        function(zipPath, zipSize, cb) {
            console.log('\n\n\n response.... server zip file path > ',zipPath);
            console.log('\nDownload file name > ',_getName(zipPath));

            fs.readFile(zipPath, 'binary', function(err, file) {
                if (err) {
                    _errorHandler(err, req, res);
                }

                res.set('Content-Type', 'application/octet-stream');
                res.set('Content-Disposition', 'attachment; filename='+ _getName(zipPath));
                res.set('Content-Length', zipSize);
                res.end(file, 'binary');

                console.timeEnd('exportUIPProject');
                cb(true);
            });
        }
    ]);
};





