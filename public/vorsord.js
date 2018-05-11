//sharzhvum e, spanum e xotakernerin
//mahanum e 3 angam chuteluc
class Vorsord extends Parent{
    constructor(x, y) {
        super(x,y);
        this.kyanq = 3;
        this.directions = [];
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
