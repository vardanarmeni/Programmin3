class Grass extends Parent {



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



