//stexcum e ir shurj@ xotaker grassi kam datark vandaki poxaren
// chi bazmanum ev chi mahanum
class Ararich extends Parent {
    constructor(x, y) {
        super(x, y);
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