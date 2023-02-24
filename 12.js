function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier New");
  background(255, 246, 230);
  frameRate(1.5);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 246, 230);
}

function draw(){
  textSize(height/36);
  fill(4, 55, 112,255);
  textStyle(BOLD);
    
  textAlign(CENTER, CENTER);
  text("Call and response: Bad stuff will definitely happen; Do not be afraid", width/2,(height/21)*5);   
}