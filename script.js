var n = 50, m = 50;
var side = 15;
var matrix = [];
for(var y=0; y<m; ++y) {
  matrix.push([]);
  for(var x=0; x<n; x += 1) {
    matrix[y].push(Math.round(Math.random()*4.6))
  }
}

var grassArr = [];
var xotakerArr=[];
var gishatichArr=[];
var ararichArr=[];
var vorsordArr=[];

function setup() {
  frameRate(1);
  createCanvas(matrix[0].length * side, matrix.length * side);
  background('#acacac');

  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
          var xot = new Grass(x, y);
          grassArr.push(xot);
      }
      else if (matrix[y][x] == 2) {
        var xotaker = new Xotaker(x, y);
        xotakerArr.push(xotaker);
      }
      else if (matrix[y][x] == 3) {
        var gishatich = new Gishatich(x, y);
        gishatichArr.push(gishatich);
      }
      else if(matrix[y][x] == 4) {
        var vorsord = new Vorsord(x,y)
          vorsordArr.push(vorsord);
      }
      else if (matrix[y][x] == 5) {
        var ararich = new Ararich(x, y);
        ararichArr.push(ararich);
      }
    }
  }
}

function draw() {
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
        fill("green");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 0) {
        fill("#E5E0DB");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 2) {
        fill("yellow");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        fill("brown");
        rect(x * side, y * side, side, side);
      }
      else if(matrix[y][x]==4) {
        fill('#DFAB70');
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 5) {
        fill("blue");
        rect(x * side, y * side, side, side);
      }
    }
  }

  for (var i in grassArr) {
    grassArr[i].bazmanal();
  }
  for (var i in xotakerArr) {
    xotakerArr[i].utel();
  }
  for (var i in gishatichArr) {
    gishatichArr[i].veracnel();
  }
  for (var i in ararichArr) {
    ararichArr[i].ararel();
  }
  for (var i in vorsordArr) {
    vorsordArr[i].spanel();
  }
}
