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
    
  textAlign(RIGHT, CENTER);
  text("I am not alone", width/2 + textWidth("and")/2,(height/21)*5);
    
  for (let i=6; i < 13; i++){
      if (frameCount > i-5){
          textAlign(CENTER, CENTER);
          text("and", width/2,(height/21)*i);
      }
  } 
  
  if (frameCount >= 9){
      textAlign(LEFT, CENTER);
      text("and",width/2 - textWidth("and")/2,(height/21)*13);
  }
  
  if (frameCount >= 10){
      textAlign(LEFT, CENTER);
      text("I am trying my best",width/2 - textWidth("and")/2 +textWidth("and "),(height/21)*13);
  }
      
}