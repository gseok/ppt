var EXPORTSTR = {
    RUNNER: 'page-runner.js',
    MAPPER: 'file-id-mapper.js'
};

var fsId = 'ekF4bYgLW'; // export service app fs id
var webidaFsPath = '/webida/fs/'; // webida file system path
var basePath = webidaFsPath + fsId; // export service app base path
var zipPath = __dirname + '/.export';
var outputPath = zipPath + '/output';
var libStoragePath = zipPath + '/lib';
var runnerFilePath = libStoragePath + '/' + EXPORTSTR.RUNNER;
var mapperFilePath = libStoragePath + '/' + EXPORTSTR.MAPPER;
var projectStoragePath = zipPath + '/project';
var PATH = {
    fsId: fsId,
    webidaFsPath: webidaFsPath,
    basePath: basePath,
    zipPath: zipPath,
    outputPath: outputPath,
    libStoragePath: libStoragePath,
    runnerFilePath: runnerFilePath,
    mapperFilePath: mapperFilePath,
    projectStoragePath: projectStoragePath
};

module.exports = {
    EXPORTSTR: EXPORTSTR,
    PATH: PATH
};
