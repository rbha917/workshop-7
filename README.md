# workshop-7

### Link to sketch: https://rbha917.github.io/workshop-7/ 

## Simulations
### Objects
- defined at the top of the page and organise the code better e.g.
let ball = {
	x: 200,
	y: 200
}
- can use this to be manipulated inside a function
function move(){
	ball.x = ball.x + random(-4, 4); //moves it randomly from x position by those values, can do the same with y//
	ball.y = ball.y + random(-4, 4);
}
- actually make the object
function show()	{
	fill(255, 0, 255);
	noStroke();
	ellipse(ball.x, ball.y, 30, 30);
}
- draw objects by putting functions under draw
### Classes
- a template to create other objects
class Ball {
	constructor(x, y, r){ //where you can define the variables to use in the functions, this one defines the starting x and y positions//
		this.x = 100;
		this.y = 100;
		this.r = r
	} //you can just leave these as x and y, no number values and then add in the values under setup between the () when you write 'new Ball' if you want them to be different//
	
	move(){
	ball.x = ball.x + random(-4, 4);
	ball.y = ball.y + random(-4, 4);		
	}

	show(){
		fill(255, 0, 255);
		noStroke();
		ellipse(this.x, this.y, 30, 30);
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
- define variables at top page: let ball1, ball2;
- under setup, name objects
ball1 = new Ball; or ball1 = new Ball (50, 50, 10);
ball2 = new Ball;
- under draw, call functions
ball1.move();
ball1.show();
ball1.edges();
ball2.move();
ball2.show();
ball2.edges();
### Generating multiple of an object to the screen with random values and positions
- create an array
let ballSystem = []
- under setup
for(x = 0; x < 30; x++){ //number is amount of the object//
	let rx = random(15, width - 15);
	let ry = random(15, height - 15);
	let rr = random(10, 50)
	ballSystem[x] = new Ball(rx, ry, rr);
}
- under draw
for(x = 0; x < ballSystem.length; x++){
	ballSystem[x].move();
	ballSystem[x].show();
	ballSystem[x].edges();
}
## Drunken Walk
- drawing random paths/squiggles that look like a person's walking path
let walkers = []
- setup
for(s = 0; s < 40; s ++){
	let x = random(0, width);
	let y = random(0, height);
	let r = random(0, 255);
 	let g = random(0, 255);
	let b = random(0, 255);
	walkers[s] = new Walker(x, y, r, g, b);
}
- draw
for(x = 0; x < walkers.length; X++){
	walkers[x].step();
	walkers[x].show();
}
- class
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
