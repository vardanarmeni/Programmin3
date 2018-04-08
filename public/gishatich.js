// utum e kam xotakeri kam grassi,
// mahanum e 10 angam snund chgtneluc heto
// ansharzh e
class Gishatich extends Parent {
    constructor(x, y) {
        super(x, y);
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
        var patahakanVandak;
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



