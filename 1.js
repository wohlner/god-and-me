let capture;
let vidWidth;
let vidHeight;
let fr = 30; // the framerate
let flipVelocity = 1/29; //speed and direction of rotation on x axis
let opacity = 0; //DO NOT CHANGE. starting opacity of blue vertical rectangle

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  textFont("Courier New");
  capture = createCapture(VIDEO);
  capture.hide();
  background(255, 246, 230);
  imageMode(CENTER);
  frameRate(fr);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 246, 230); 
}

function draw() {
  background(255, 246, 230);
  ratio = 7; // video height ratio to screen width
  vidWidth = (height * capture.width / capture.height)/ratio;
  vidHeight = height/ratio;
    
  //live video capture in center of window 
  image(capture, 0,0, vidWidth, vidHeight);
 
  //code first flipping video up and down
  if (frameCount > 0  && frameCount < 90) {
    //up 
    push();
    translate(0, -vidHeight/2, 0);
    rotateX(frameCount * -flipVelocity);
    scale(1, 1);
    image(capture, 0, vidHeight/2, vidWidth, vidHeight);
    pop();
    
    //down
    push();
    translate(0, vidHeight/2, 0);
    rotateX(frameCount * -flipVelocity);
    image(capture, 0, -vidHeight/2, vidWidth, vidHeight);
    pop();
  }
     

  //code for still video after first 180 flip
  if (frameCount >= 90) {
    //up
    push();
    translate(0, -vidHeight/2, 0);
    scale(1, -1);
    image(capture, 0, vidHeight/2, vidWidth, vidHeight);
    pop();
  
    //down
    push();
    translate(0, vidHeight/2, 0);
    scale(1, -1);
    image(capture, 0, -vidHeight/2, vidWidth, vidHeight);
    pop();
  
  }

  //code second flipping video up and down
  if (frameCount > 90  && frameCount < 180) {
    //up
    push();
    translate(0, -1.5*vidHeight, 0);
    rotateX(frameCount * -flipVelocity);
    scale(1, -1);
    image(capture, 0, vidHeight/2, vidWidth, -vidHeight);
    pop();
    
    //down
    push();
    translate(0, 1.5*vidHeight, 0);
    rotateX(frameCount * -flipVelocity);
    scale(1, -1);
    image(capture, 0, -vidHeight/2, vidWidth, -vidHeight);
    pop();
  }
  
  //code second video up and down
  if (frameCount >= 180) {
    //up
    push();
    translate(0, -2.5*vidHeight, 0);
    scale(1, 1);
    image(capture, 0, vidHeight/2, vidWidth, vidHeight);
    pop();
    
    //down
    push();
    translate(0, 2.5*vidHeight, 0);
    scale(1, 1);
    image(capture, 0, -vidHeight/2, vidWidth, vidHeight);
    pop();
  }
  
  //code third flipping video up and down
  if (frameCount >= 180  && frameCount < 270) {
    //up
    push();
    translate(0, -2.5*vidHeight, 0);
    rotateX(frameCount * -flipVelocity);
    scale(1, -1);
    image(capture, 0, -vidHeight/2, vidWidth, -vidHeight);
    pop();
    
    //down
    push();
    translate(0, 2.5*vidHeight, 0);
    rotateX(frameCount * -flipVelocity);
    scale(1, -1);
    image(capture, 0, vidHeight/2, vidWidth, -vidHeight);
    pop();
  }
  
  //code third video up and down
  if (frameCount >= 270) {
    //up
    push();
    translate(0, -2.5*vidHeight, 0);
    scale(1, -1);
    image(capture, 0, vidHeight/2, vidWidth, vidHeight);
    pop();
    
    //down
    push();
    translate(0, 2.5*vidHeight, 0);
    scale(1, -1);
    image(capture, 0, -vidHeight/2, vidWidth, vidHeight);
    pop();
  }
  
  //fade in blue rectangle
  if(frameCount > 270){
    noStroke();
    fill(4, 55, 112, opacity);
        if(opacity >= 255 * .8) opacity = 255 * .8;
        else opacity = opacity + (255)/fr;
    rectMode(CENTER);
    rect(0, 0, vidWidth, height)
  }
}
