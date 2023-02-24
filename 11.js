let capture;
let vidWidth;
let vidHeight;
let fr = 30; // the framerate
let flipVelocity = 1/29; //speed and direction of rotation on x axis
let opacity = 255 * .8; //DO NOT CHANGE. starting opacity of blue vertical rectangle

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
  
  
  if (frameCount <= 90) {
    //1
    push();
    scale(1,-1);
    image(capture, 0,3*vidHeight, vidWidth, vidHeight);
    pop();
      
    //7
    push();
    scale(1,-1);
    image(capture, 0,-3*vidHeight, vidWidth, vidHeight);
    pop();
  }

  //folding
  if (frameCount >=90 && frameCount < 180 ) {
    //1
    push();
    translate(0, -2.5*vidHeight, 0);
    rotateX(frameCount * flipVelocity);
    scale(1, -1);
    image(capture, 0, -vidHeight/2, vidWidth, -vidHeight);
    pop();
      
    //7
    push();
    translate(0, 2.5*vidHeight, 0);
    rotateX(frameCount * flipVelocity);
    scale(1, -1);
    image(capture, 0, vidHeight/2, vidWidth, -vidHeight);
    pop();
  }
      
  if (frameCount <= 180) {
    //2
    push();
    image(capture, 0,-2*vidHeight, vidWidth, vidHeight);
    pop();
      
    //6
    push();
    image(capture, 0,2*vidHeight, vidWidth, vidHeight);
    pop();
  }
  
  //folding
  if (frameCount >=180 && frameCount < 270 ) {
    //2
    push();
    translate(0, -1.5*vidHeight, 0);
    rotateX(frameCount * flipVelocity);
    scale(1, -1);
    image(capture, 0, vidHeight/2, vidWidth, -vidHeight);
    pop();
    
    //6
    push();
    translate(0, 1.5*vidHeight, 0);
    rotateX(frameCount * flipVelocity);
    scale(1, -1);
    image(capture, 0, -vidHeight/2, vidWidth, -vidHeight);
    pop();
  }
    
  if (frameCount <= 270) {
    //3
    push();
    scale(1,-1);
    image(capture, 0,vidHeight, vidWidth, vidHeight);
    pop();
      
    //5
    push();
    scale(1,-1);
    image(capture, 0,-vidHeight, vidWidth, vidHeight);
    pop();
  }
    
  //folding
  if (frameCount >=270 && frameCount < 360 ) {
    //3
    push();
    translate(0, -vidHeight/2, 0);
    rotateX(frameCount * flipVelocity);
    scale(1, 1);
    image(capture, 0, vidHeight/2, vidWidth, vidHeight);
    pop();
    
    //5
    push();
    translate(0, vidHeight/2, 0);
    rotateX(frameCount * flipVelocity);
    image(capture, 0, -vidHeight/2, vidWidth, vidHeight);
    pop();    
  }
    
  
  // live video capture in center of window 
  push();
  image(capture, 0,0, vidWidth, vidHeight);
  pop();
  
  
    
  //fade out blue rectangle
  //if(frameCount > 2 && frameCount < 90){
    //noStroke();
    //fill(4, 55, 112, opacity);
        //if(opacity <= 0) opacity = 0;
        //else opacity = opacity - (120)/fr;
    //rectMode(CENTER);
    //rect(0, 0, vidWidth, height)
  //}
 
  
 
  
}
