let capture;
let vidWidth;
let vidHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier New");
  capture = createCapture(VIDEO);
  capture.hide();
  background(255, 246, 230);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 246, 230); 
}

function draw(){
 ratio = 4; // video width ratio to screen width
 vidWidth = width/ratio;
 vidHeight = (width * capture.height / capture.width)/ratio;
    
 //live video capture
 image(capture, width/2 - vidWidth/2, height/2 - vidHeight/2, vidWidth, vidHeight); 
 
 //make the live video blue
 fill(4, 55, 112,255*2/3)
 noStroke();
 rect(width/2 - vidWidth/2, height/2 - vidHeight/2, vidWidth,  vidHeight);
    
 //textSize(height/21);
 //textAlign(LEFT, TOP);
 //text(vidWidth + " and " + vidHeight, 30, height/20);
}