let walkers = []
let stars = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 0, 30);

  for(s = 0; s < 100; s ++){
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    walkers[s] = new Walker(x, y, r, g, b);
  }

  for(c = 0; c < 100; c ++){ //number is amount of the object//
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(10, 50)
    stars[c] = new Star(rx, ry, rr);
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

	path(){
		strokeWeight(2);
		stroke(this.r, this.g, this.b);
		point(this.x, this.y);
	}
}

class Star {
	constructor(x, y, r){ //where you can define the variables to use in the functions, this one defines the starting x and y positions//
		this.x = x;
		this.y = y;
		this.r = r;
	} //you can just leave these as x and y, no number values and then add in the values under setup between the () when you write 'new Ball' if you want them to be different//
	
	move(){
	this.x = this.x + random(-4, 4);
	this.y = this.y + random(-4, 4);		
	}

	show(){
		fill(150, 150, 0);
		noStroke();
		ellipse(this.x, this.y, random(0, 30), random(0,30));
	}

	edges(){ //prevent object from going off the canvas completely, number determined by half size of object//
		if (this.x < 15){
			this.x = 15;
		} else if(this.x > width - 15){
			this.x = width - 15;
		}
		if (this.y < 15){
			this.y = 15;
		} else if(this.y > height - 15){
			this.y = height - 15;
		}
	}
}

function draw() {

  background(0, 0, 30)
  for(x = 0; x < stars.length; x++){
    stars[x].move();
    stars[x].show();
    stars[x].edges();
  }
  
  // for(x = 0; x < walkers.length; x++){
  //   walkers[x].step();
  //   walkers[x].path();
  // }
}






