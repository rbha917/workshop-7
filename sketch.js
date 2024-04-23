let walkers = []
let balls = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  for(s = 0; s < 100; s ++){
    let x = random(0, width);
    let y = random(0, height);
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    walkers[s] = new Walker(x, y, r, g, b);
  }

  for(c = 0; c < 30; c ++){ //number is amount of the object//
    let rx = random(15, width - 15);
    let ry = random(15, height - 15);
    let rr = random(10, 50)
    balls[c] = new Ball(rx, ry, rr);
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

class Ball {
	constructor(x, y, r){ //where you can define the variables to use in the functions, this one defines the starting x and y positions//
		that.x = x;
		that.y = y;
		that.r = r
	} //you can just leave these as x and y, no number values and then add in the values under setup between the () when you write 'new Ball' if you want them to be different//
	
	move(){
	ball.x = ball.x + random(-4, 4);
	ball.y = ball.y + random(-4, 4);		
	}

	show(){
		fill(255, 0, 255);
		noStroke();
		ellipse(that.x, that.y, 30, 30);
	}

	edges(){ //prevent object from going off the canvas completely, number determined by half size of object//
		if (that.x < 15){
			that.x = 15;
		} else if(that.x > width - 15){
			that.x = width - 15;
		}
		if (that.y < 15){
			that.y = 15;
		} else if(that.y > height - 15){
			that.y = height - 15;
		}
	}
}

function draw() {
  for(x = 0; x < walkers.length; x++){
    walkers[x].step();
    walkers[x].show();
  }
  
  for(x = 0; x < balls.length; x++){
    balls[x].move();
    balls[x].show();
    balls[x].edges();
  }  
}






