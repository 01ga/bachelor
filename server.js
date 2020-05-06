var express = require('express');
var app = express();
const path = require('path');

app.use('/', express.static(path.join(__dirname + '/build')));
app.use('/css', express.static(path.join(__dirname + '/build/css')));
app.use('/fonts', express.static(path.join(__dirname + '/build/fonts')));
app.use('/js', express.static(path.join(__dirname + '/node_modules/angular')));
app.use('/js', express.static(path.join(__dirname + '/build/js')));
app.use('/static/js', express.static(path.join(__dirname + '/build/static/js')));
app.use('/static/css', express.static(path.join(__dirname + '/build/static/css')));
app.use('/static/media', express.static(path.join(__dirname + '/build/static/media')));
app.use('/angularjs', express.static(path.join(__dirname + '/build/angularjs')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, function () {
  console.log('UI Migration Page is listening on port 9000');
});
