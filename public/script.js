function nerkel()
{

fill();
}

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
      else if (matrix[y][x] == 4) {
        var vorsord = new Vorsord(x, y)
        vorsordArr.push(vorsord);
      }
      else if (matrix[y][x] == 5) {
        var ararich = new Ararich(x, y);
        ararichArr.push(ararich);
      }
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
