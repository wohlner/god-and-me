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
  textSize(width/36);
  fill(4, 55, 112,255);
  textStyle(BOLD);
    
  textAlign(RIGHT, CENTER);
  text("God loves me", width/2 + textWidth("me")/2,(height/21)*6);
    
  for (let i=7; i < 14; i++){
      if (frameCount > i-6){
          text("me", width/2 + textWidth("me")/2,(height/21)*i);
      }
  } 
  
  if (frameCount >= 9){
      textAlign(LEFT, CENTER);
      text("we love you",width/2 - textWidth("me")/2,(height/21)*14);
  }
      
}