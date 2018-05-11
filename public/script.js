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
var exanak = "amar";

function setup() {

  setInterval(function() {


      if (exanak == 'amar') {
        exanak = 'ashun';
      }
      else if (exanak == "ashun") {
        exanak = 'dzmer';

      }
      else if (exanak == 'dzmer') {
        exanak = 'garun';

      }
      else if(exanak == 'garun')
      {
        exanak = 'amar';
      }

  }, 5000);

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
        var r = Math.round(Math.random()) / 2;
       // var xotaker = new Xotaker(x, y,r);
       // xotakerArr.push(xotaker);
       xotakerArr.push(new Xotaker(x,y,r));
     if(r == 0.5)
       {
       console.log('igakan');
       }
       matrix[y][x] +=r;

      }
      else if (matrix[y][x] == 3) {
        var gishatich = new Gishatich(x, y,r);
        gishatichArr.push(gishatich);
      }
      else if (matrix[y][x] == 4) {
        var vorsord = new Vorsord(x, y,r)
        vorsordArr.push(vorsord);

        matrix[y][x] +=r;
        if(r == 0.5)
        {
          console.log('vardan');
        }

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
        if(exanak == 'amar')
        {
          fill('red');
        }
        else if(exanak == 'ashun')
        {

          fill('#FFA600');
        }
        else if(exanak == 'dzmer')
        {
          fill('white');
        }
        else if(exanak == 'garun')
        {
          fill('green');
        }
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 0) {
        fill("#E5E0DB");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 2) {
        console.log('ARAKAN');
        fill("yellow");
        rect(x * side, y * side, side, side);
      }
      else if(matrix[y][x] == 2.5)
      {
        fill("#F5FC5C");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 3) {
        fill("brown");
        rect(x * side, y * side, side, side);
      }
      else if (matrix[y][x] == 4) {
        fill('#DFAB70');
        rect(x * side, y * side, side, side);
      }
      else if(matrix[y][x] == 4.5)
      {
        fill('#FFD093');
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
