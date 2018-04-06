class Grass{

    constructor(x,y){
			this.x = x;
			this.y = y;
			this.multiply = 0;
			this.directions = [
			    [this.x - 1, this.y - 1],
			    [this.x    , this.y - 1],
			    [this.x + 1, this.y - 1],
			    [this.x - 1, this.y    ],
			    [this.x + 1, this.y    ],
			    [this.x - 1, this.y + 1],
			    [this.x    , this.y + 1],
			    [this.x + 1, this.y + 1]
			];

    }

		yntrelVandak(ch) {
		   var found = [];
		   for (var i in this.directions) {
		     var x = this.directions[i][0];
		     var y = this.directions[i][1];
				 if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
					 if (matrix[y][x] == ch) {
							found.push(this.directions[i]);
						}
		      }
		   }
		   return found;
		}

		bazmanal() {
			this.multiply++;
			var norVandak = random(this.yntrelVandak(0));
			if (this.multiply >= 2 && norVandak) {
				var norXot = new Grass(norVandak[0], norVandak[1]);
				grassArr.push(norXot);
				matrix[norVandak[1]][norVandak[0]] = 1;
				this.multiply = 0;
			}
		}
}


class Xotaker {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.energyBazmanal = 0;
		this.energyMahanal = 5;
    this.directions = [];
	}

  stanalNorKordinatner() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }


	yntrelVandak(ch) {
		var found = [];
    this.stanalNorKordinatner();
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

  mahanal() {
      matrix[this.y][this.x] = 0;
      for (var i in xotakerArr) {
        if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
          xotakerArr.splice(i, 1);
        }
      }
  }

	sharjvel() {
		var patahakanVandak = random(this.yntrelVandak(0));
    --this.energyMahanal;
		if (patahakanVandak) {
			matrix[this.y][this.x] = 0;
			this.x = patahakanVandak[0];
			this.y = patahakanVandak[1];
			matrix[this.y][this.x] = 2;
			if (this.energyMahanal == 0) {
				this.mahanal();
			}
		}
	}


	bazmanal() {
		var norVandak = random(this.yntrelVandak(0));
		if (norVandak) {
			var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
			xotakerArr.push(norXotaker);
			matrix[norVandak[1]][norVandak[0]] = 2;
			this.energyBazmanal = 0;
      this.energyMahanal == 5;
		}
	}


	utel() {
		var patahakanVandak = random(this.yntrelVandak(1));
		if (patahakanVandak) {
      if (this.energyMahanal < 5) {
        ++this.energyMahanal;
      }
			++this.energyBazmanal;

			matrix[this.y][this.x] = 0;

			this.x = patahakanVandak[0];
			this.y = patahakanVandak[1];

			matrix[this.y][this.x] = 2;

			for (var i in grassArr) {
				if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
					grassArr.splice(i, 1);
					break;
				}
			}
			if (this.energyBazmanal > 4) {
				this.bazmanal();
			}
		}
		else {
			this.sharjvel();
		}
	}
}

 // utum e kam xotakeri kam grassi,
 // mahanum e 10 angam snund chgtneluc heto
 // ansharzh e
class Gishatich {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.energyMahanal = 10;
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
	}


	yntrelVandak(ch) {
		var found = [];
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

  mahanal() {
    for (var i in gishatichArr) {
      if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
        matrix[this.y][this.x] = 0;
        gishatichArr.splice(i, 1);
      }
    }
  }


	veracnel() {
		var patahakanXotaker = random(this.yntrelVandak(2));
    var patahakanGrass = random(this.yntrelVandak(1));
    var patahakanVandak ;
    var arr;

    if (patahakanXotaker) {
      patahakanVandak = patahakanXotaker;
      arr = xotakerArr;
    }
    else if (patahakanGrass) {
      patahakanVandak = patahakanGrass;
      arr = grassArr;
    }
		if (patahakanVandak) {
      if (this.energyMahanal < 10) {
        ++this.energyMahanal;
      }

			var norX = patahakanVandak[0];
			var norY = patahakanVandak[1];

      matrix[norY][norX] = 0;

			for (var i in arr) {
				if (arr[i].x == norX && arr[i].y == norY) {
					arr.splice(i, 1);
					break;
				}
			}
		}
	  else {
      --this.energyMahanal;
		}
    if (this.energyMahanal < 1) {
      this.mahanal();
    }
	}
}



 //stexcum e ir shurj@ xotaker grassi kam datark vandaki poxaren
 // chi bazmanum ev chi mahanum
class Ararich {
    constructor(x,y){
			this.x = x;
			this.y = y;
			this.directions = [
			    [this.x - 1, this.y - 1],
			    [this.x    , this.y - 1],
			    [this.x + 1, this.y - 1],
			    [this.x - 1, this.y    ],
			    [this.x + 1, this.y    ],
			    [this.x - 1, this.y + 1],
			    [this.x    , this.y + 1],
			    [this.x + 1, this.y + 1]
			];

    }

		yntrelVandak() {
		   var found = [];
		   for (var i in this.directions) {
		     var x = this.directions[i][0];
		     var y = this.directions[i][1];
				 if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
						found.push(this.directions[i]);
		     }
		   }
		   return random(found);
		}

    ararel() {
      var norVandak = this.yntrelVandak();
      var norX = norVandak[0];
      var norY = norVandak[1];
      if (matrix[norY][norX] == 0) {
        matrix[norX][norY] = 2;
        var xotaker = new Xotaker(norX, norY);
        xotakerArr.push(xotaker);
      }
      else if (matrix[norY][norX] == 1) {
        var xotaker = new Xotaker(norX, norY);
        xotakerArr.push(xotaker);
        matrix[norX][norY] = 2;
        for (var i in grassArr) {
          if (grassArr[i].x == norX && grassArr[i].y == norY) {
            grassArr.splice(i, 1);
            break;
          }
        }
      }
    }
}

//sharzhvum e, spanum e xotakernerin
//mahanum e 3 angam chuteluc
class Vorsord {
  constructor(x, y) {
		this.x = x;
		this.y = y;
		this.kyanq = 3;
    this.directions = [];
	}

  stanalNorKordinatner() {
    this.directions = [
      [this.x - 1, this.y - 1],
      [this.x, this.y - 1],
      [this.x + 1, this.y - 1],
      [this.x - 1, this.y],
      [this.x + 1, this.y],
      [this.x - 1, this.y + 1],
      [this.x, this.y + 1],
      [this.x + 1, this.y + 1]
    ];
  }


	yntrelVandak(ch) {
		var found = [];
    this.stanalNorKordinatner();
		for (var i in this.directions) {
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
				if (matrix[y][x] == ch) {
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

  mahanal() {
    matrix[this.y][this.x] = 0;
    for (var i in vorsordArr) {
      if (vorsordArr[i].x == this.x && vorsordArr[i].y == this.y) {
        vorsordArr.splice(i, 1);
      }
    }
  }

	sharjvel() {
		var patahakanVandak = random(this.yntrelVandak(0));
    --this.kyanq;
		if (patahakanVandak) {
			matrix[this.y][this.x] = 0;
			this.x = patahakanVandak[0];
			this.y = patahakanVandak[1];
			matrix[this.y][this.x] = 4;
			if (this.kyanq < 1) {
				this.mahanal();
			}
		}
	}

	spanel() {
		var patahakanVandak = random(this.yntrelVandak(2));
		if (patahakanVandak) {
      if (this.kyanq < 5) {
        ++this.kyanq;
      }

			matrix[this.y][this.x] = 0;

			this.x = patahakanVandak[0];
			this.y = patahakanVandak[1];

			matrix[this.y][this.x] = 4;

			for (var i in xotakerArr) {
				if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
					xotakerArr.splice(i, 1);
					break;
				}
			}
		}
		else {
			this.sharjvel();
		}
	}
}
