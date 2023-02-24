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
    
  textAlign(LEFT, CENTER);
  text("Call and response:", width/2 - textWidth("REMEMBER "),(height/21)*5); 
  text("REMEMBER ", width/2 - textWidth("REMEMBER "),(height/21)*7);
  text("God loves me", width/2,(height/21)*7);
 
  text("REMEMBER ", width/2 - textWidth("REMEMBER "),(height/21)*8); 
  text("I love myself", width/2,(height/21)*8);
    
  text("REMEMBER ", width/2 - textWidth("REMEMBER "),(height/21)*9); 
  text("Do not be afraid", width/2,(height/21)*9); 
}