var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('./public/index.html');


});
server.listen(3000);


var n = 50, m = 50;
var side = 15;
var matrix = [];
for (var y = 0; y < m; ++y) {
  matrix.push([]);
  for (var x = 0; x < n; x += 1) {
    matrix[y].push(Math.round(Math.random() * 4.6))
  }
}

 var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var ararichArr = [];
var vorsordArr = [];

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        nerkel('green');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 0) {
        nerkl("#E5E0DB");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 2) {
        nerkel("yellow");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        nerkel("brown");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        nerkel('#DFAB70');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 5) {
        nerkel("blue");
        rect(x * side, y * side, side, side);
      }
    }
  }
}

setInterval(draw,1000);
