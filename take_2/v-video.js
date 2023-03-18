let capture;
let vidWidth;
let vidHeight;
let fr = 30; // the framerate
let flipVelocity = 1/29; //speed and direction of rotation on x axis
let vertLineWeight = .05

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  //background(255,255,255); 
  capture = createCapture(VIDEO);
  capture.hide();
  imageMode(CENTER);
  frameRate(fr);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  //background(255,255,255); 
}

function draw() {
  background(250,250,250);
  ratio = 7; // video height ratio to screen width
  vidWidth = (windowHeight * capture.width / capture.height)/ratio;
  vidHeight = windowHeight/ratio;
    
  //live video capture in center of window 
  image(capture, 0,0, vidWidth, vidHeight);
 
  //code for first flipping video up and down
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

  //code for second flipping video up and down
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
  
  //code for still video after second 180 flip
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
  
  //code for third flipping video up and down
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
  
  //code for still video after third 180 flip
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
  
  beginLayer();
    background(0,0,0,0);
    
    //draw vertical lines over videos from y = 0 to mouseY position
    if(frameCount > 300 && frameCount%10 == 0 ){
      stroke(250, 77, 149);
      strokeWeight(3);
      let value = [];   
      for (let i = 0; i < vidWidth+1; i++) {
        value.push(i);
      }
      push();
      translate(windowWidth/2-vidWidth/2,0);
      line(random(value),0,random(value), mouseY);
      pop();
      
      
    }
  
  // draw ever expanding pink lines to the left and right of the videos
  if(frameCount > 270){
   stroke(250, 77, 149);
   vertLineWeight += .05;
   strokeWeight(vertLineWeight);
      for (let j = 0; j < windowWidth/2 - vidWidth/2; j+=21) {
        beginShape(LINES);
          vertex(j, 0);
          vertex(j, windowHeight);
          vertex(windowWidth - j, 0);
          vertex(windowWidth - j, windowHeight);
        endShape();
      }
  }
  
  endLayer(); 
}
 

