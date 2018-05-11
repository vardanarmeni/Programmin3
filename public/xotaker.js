class Xotaker extends Parent {
    constructor(x, y, ser) {
        super(x, y);
        this.energyBazmanal = 0;
        this.energyMahanal = 5;
        this.ser = (ser == 0 ? 'arakan' : 'igakan');
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
      if(matrix[this.y][this.x]==2)
      {
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
    else if(matrix[this.y][this.x] == 2.5)
    {
      var patahakanVandak = random(this.yntrelVandak(0));
      --this.energyMahanal;
      if (patahakanVandak) {
          matrix[this.y][this.x] = 0;
          this.x = patahakanVandak[0];
          this.y = patahakanVandak[1];
          matrix[this.y][this.x] = 2.5;
          if (this.energyMahanal == 0) {
              this.mahanal();
          }
      }
    }
}

    bazmanal() {

        if (this.ser = 'arakan') {
            var vandak = random(this.yntrelVandak(2.5));
            if (vandak) {
                var norVandak = random(this.yntrelVandak(0));
                  if (norVandak) {
                        var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
                        xotakerArr.push(norXotaker);
                        matrix[norVandak[1]][norVandak[0]] = 2 + Math.round(Math.random()) / 2;
                        this.energyBazmanal = 0;
                        this.energyMahanal =  5;
                  }
            }
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
