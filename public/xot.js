class Grass extends Parent {



	bazmanal() {
		if(exanak == 'amar')
		{
			this.multiply = 4; 
		}
		else if(exanak == 'ashun')
		{
			this.multiply = 2;
		}
		else if(exanak == 'dzmer')
		{
			this.multiply = 0;
		}
		else if(exanak == 'garun')
		{
			this.multiply = 6;
		}
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



