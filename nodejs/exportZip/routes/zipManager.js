var EventEmitter = require('events').EventEmitter;
var fs = require('fs');
var archiver = require('archiver');
var common = require('./common');
var d = require('domain').create();


var ZipManager = function (name) {
    this.name = name;
    this.emitter = new EventEmitter();

    this.basePath = common.PATH.basePath;
    this.zipPath = common.PATH.zipPath;
    this.outputPath = common.PATH.outputPath;
    this.libStoragePath = common.PATH.libStoragePath;
    this.projectStoragePath = common.PATH.projectStoragePath;
};
(function () {
    function _applyCallback(cb) {
        if (!!cb && typeof(cb) === 'function') {
            if (arguments.length > 1) {
                var args = Array.prototype.slice.call(arguments),
                    object = args.shift();
                cb.apply(object, args.concat(Array.prototype.slice.call(arguments)));
            } else {
                cb();
            }
        }
    }

    function _getFileExtension(filename) {
        return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined;
    }

    this.zip = function (cb) {
        var _self = this;
        var _falied = false;
        var _err = null;
        d.on('error', function(er) {
            console.log('error, but oh well', er.message);
            _falied = true;
            _err = er;
            return;
        });
        d.run(function() {
            if (_getFileExtension(_self.name) !== 'zip') {
                _self.name += '.zip';
            }
            var paths = _self.outputPath.split('/');
            paths = paths.concat(_self.name.split('/'));
            var path = paths.join('/');
            var output = fs.createWriteStream(path);
            var archive = archiver('zip');

            output.on('close', function() {
                console.log(archive.pointer() + ' total bytes');
                console.log('archiver has been finalized and the output file descriptor has closed.');

                if (!_falied) {
                    console.log('call success');
                    _applyCallback(cb, null, path, archive.pointer());
                } else {
                    console.log('call failed');
                    _applyCallback(cb, _err);
                }
            });

            archive.on('error', function(err) {
                console.log('error...');
                _applyCallback(cb, err);
            });

            archive.pipe(output);
            archive.bulk([
                { expand: true, cwd: _self.projectStoragePath, src: ['**/*']},
                { expand: true, cwd: _self.zipPath, src: ['lib/**/*']}
            ]);

            archive.finalize();
        });


//        var basePath = '/webida/fs/ekF4bYgLW';
//        var zipPath = basePath + '/UIP-SnapshotTEST/exportZip/.export';
//        var outputPath = zipPath + '/output';
//        var libStoragePath = zipPath + '/lib';
//        var projectStoragePath = zipPath + '/project';
//
//        if (_getFileExtension(this.name) !== 'zip') {
//            this.name += '.zip';
//        }
//        var paths = outputPath.split('/');
//        paths = paths.concat(this.name.split('/'));
//        var path = paths.join('/');
//        var output = fs.createWriteStream(path);
//        var archive = archiver('zip');
//
//        output.on('close', function() {
//            console.log(archive.pointer() + ' total bytes');
//            console.log('archiver has been finalized and the output file descriptor has closed.');
//
//             _applyCallback(cb, null, path, archive.pointer());
//        });
//
//        archive.on('error', function(err) {
//            console.log('error...');
//             _applyCallback(cb, err);
//        });
//
//        archive.pipe(output);
//        archive.bulk([
//            { expand: true, cwd: projectStoragePath, src: ['**/*']},
//            { expand: true, cwd: zipPath, src: ['lib/**/*']}
//        ]);
//
//        archive.finalize();
    };
}).call(ZipManager.prototype);

module.exports = ZipManager;
