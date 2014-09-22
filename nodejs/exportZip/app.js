var express = require('express');
var exportZip = require('./routes/exportZip');
var app = express();

app.configure(function () {
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
        next();
    });
    app.use(app.router);
});

app.post('/api/project', exportZip.exportUIPProject);
app.listen(5102);
console.log('------------------------------------------------------------');
console.log('Listening on port 172.21.41.11:5102...');
console.log('Testing Addr : https://exportZip.webida.net/api/project');
console.log('------------------------------------------------------------');
