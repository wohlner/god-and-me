//based on https://p5js.org/examples/3d-geometries.html

let capture;
let vidWidth;
let vidHeight;
let flipVelocity = .01 //speed and direction of rotation on x axis

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont("Courier New");
  capture = createCapture(VIDEO);
  capture.hide();
  background(255, 246, 230);
  imageMode(CENTER);
  //frameRate(30);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 246, 230); 
}

function draw() {
  background(255, 246, 230);
  ratio = 2; // video width ratio to screen width
  vidWidth = width/ratio;
  vidHeight = (width * capture.height / capture.width)/ratio;
    
 //live video capture in center of window - no flip
 image(capture, 0,-vidHeight/2, vidWidth, vidHeight);
 
 //make the live video blue in center of window - no flip
 fill(4, 55, 112,255*2/3)
 noStroke();
 //rect(-vidWidth/2, -vidHeight, vidWidth, vidHeight);
 
  //code for a flipping plane
  push();
  translate(0, 0, 0);
  rotateZ(frameCount * 0);
  rotateX(frameCount * -flipVelocity);
  rotateY(frameCount * 0);
  image(capture, 0, -vidHeight/2, vidWidth, vidHeight);
  pop();

}