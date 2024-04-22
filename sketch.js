let walkers = []

function setup() {
  createCanvas(600, 600);

  for(s = 0; s < 40; s ++){
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    walkers[s] = new Walker(x, y, r, g, b);
  }
}

class Walker{

	constructor(x, y, r, g, b){
		this.x = x;
		this.y = y;
		this.r = r;
		this.g = g;
		this.b = b;
	}

	step(){
		this.x += random(-2, 2);
		this.y += random(-2, 2);
	}

	show(){
		strokeWeight(2);
		stroke(this.r, this.g, this.b);
		point(this.x, this.y);
	}
}

function draw() {
  background(0);
  for(x = 0; x < walkers.length; X++){
    walkers[x].step();
    walkers[x].show();
  }  
}



