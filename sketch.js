var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;
var x1 = 790;
var y1 = 500;
var x2 = Math.floor(Math.random() * x) + 100;
var y2 = Math.floor(Math.random() * y) + 400;
var x3 = 400;
var y3 = 400;
var movement = 13;
var balls = [];


function setup() {
  createCanvas(800, 600);
  for (var i = 0; i < 5; i++) {
  balls[i] = new Ball(width/2, height/2);
  }
}

function draw() {
  background(0);
  enemyCircles();
  createShape();
  objectMovement();
  theMovement();
  theExit();
  youWin();
  playerOne();
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
    balls[i].bounce();
  }
}

function keyPressed() {
  if (key == 'd') {
    x += 20;
    console.log('I am the D key. I hope you enjoy mashing the keyboard. I increased the x distance by 20 so you only have to mash it half as much as before. :D');
  }
  else if (key == 'a') {
    x -= 20;
    console.log('I am the A key. I hope you enjoy mashing the keyboard. I increased the x distance by 20 so you only have to mash it half as much as before. :D')
  }
}

function mouseClicked() {
  mousex = mouseX;
  mousey = mouseY;

}
function youWin() {
  if (x > x1 && y > y1) {
    textSize(60);
    fill(24, 200, 29)
    text("You win", 400, 400);
    //console.log("You win!") This was for testing.

  }
}
function theExit() {
  fill(24, 200, 29);
  rect(790, 500, 10, 100);
}
function theMovement() {
  if (keyIsDown(83)) {
    y += 5;
  }
  else if (keyIsDown(87)) {
    y -= 5;
  }
}
function playerOne() {
  fill(24, 200, 29);
  circle(x, y, diameter);
}
function objectMovement() {
  if (x2 >= 800 || x2 <= 0) {
    movement *= 1;
    x2 = 0;
  }
  x2 += movement;

  if (y3 >= 600 || y3 <= 0) {
    movement *= 1;
    y3 = 0;
  }
  y3 += movement;
}
function enemyCircles() {
  fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
  circle(x2, y2, Math.floor(Math.random() * 100) + 10);
  circle(x3, y3, 35);
}
function createShape() {
  ellipse(mousex, mousey, 15, 50);
}
function Ball(x, y) {
	this.x = x;
	this.y = y;
	this.sz = Math.floor(Math.random() * 50) + 5;
	this.xspeed = random(-2, 2);
	this.yspeed = random(-2, 2);
	
	this.update = function() {
		this.x += this.xspeed;
		this.y += this.yspeed;
	};
	
	this.display = function() {
		fill(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
		stroke(0);
		ellipse(this.x, this.y, this.sz, this.sz);
	};
	
	this.bounce = function() {
		if (this.x > width || this.x < 0) {
      this.xspeed *= -1;
      this.x = 0;
		}
		if (this.y > height || this.y < 0) {
      this.yspeed *= -1;
      this.y = 0;
		}
	}
}