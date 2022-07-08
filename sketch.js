let y=200;
let ySpeed = 3;
let xSpeed = 1;
let x = 200;
let r;
let g;
let b


function setup() {
  createCanvas(600, 600);
  noStroke();
  r = 50
  g = 100
  b = 200
}

function draw() {
  background(0,20);
  
  fill(r,g,b)
  circle(x,y,20);
  y += ySpeed;
  x += xSpeed;
  if (y > 575){
    ySpeed = random(3,10);
    ySpeed = -1*ySpeed;
  }
  if(y < 25){
    ySpeed = random(3,10);
    ySpeed = 1*ySpeed;
  }
  if (x > 575){
    xSpeed = random(2,10);
    xSpeed = -1*xSpeed;
    lerp(r,r+xSpeed*8,0.01);
  }
  if(x < 25){
    xSpeed = random(3,10);
    xSpeed = 1*xSpeed;
  }
    lerp(r,r+xSpeed*8,0.01);
    g = lerp(g,g+xSpeed*8,0.1);
    b = lerp(b,b+ySpeed*8,0.1);
  
}