let unit;
let spacer = 5;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  textFont("Courier New");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  translate(-width/2, -height/2, 0); //remove if not using WEBGL renderer 
    
  background(255,255,255)
  //sets the unit of measurement for the whole piece
  if (width > height) {unit = width/30;}
  if (height >= width) {unit = height/30;}
  
  rectMode(CORNER);
  noStroke();

  push();
  rotateY(frameCount * 0.02);
  //LEFT TREE
  fill(50, 168, 82);
  rect(spacer,height/2 - unit, unit, 2*unit);
  rect(spacer + unit, height/2 - unit, 1.5*unit, .5*unit)
  rect(spacer + unit, height/2 + unit/2, 1.5*unit, .5*unit)
  
  //outer column squares
  rect(spacer + 4.5*unit, height/2 - 3.5*unit, unit, unit)
  rect(spacer + 4.5*unit, height/2 - 1.75*unit, unit, unit)
  rect(spacer + 4.5*unit, height/2 +.75*unit, unit, unit)
  rect(spacer + 4.5*unit, height/2 + 2.5*unit, unit, unit)
  rect(spacer + 4.5*unit, height/2 + 4.25*unit, unit, unit)
  
  //inner column squares
  rect(spacer + 7.75*unit, height/2 - 3.5*unit, unit, unit)
  rect(spacer + 7.75*unit, height/2 - 1.75*unit, unit, unit)
  rect(spacer + 7.75*unit, height/2 +.75*unit, unit, unit)
  rect(spacer + 7.75*unit, height/2 + 2.5*unit, unit, unit)
  rect(spacer + 7.75*unit, height/2 + 4.25*unit, unit, unit)
  pop();

  //RIGHT TREE
  fill(250, 77, 149);
  rect(width - spacer - unit,height/2 - unit, unit, 2*unit);
  rect(width - spacer - 2.5*unit, height/2 - unit, 1.5*unit, .5*unit)
  rect(width - spacer - 2.5*unit, height/2 + unit/2, 1.5*unit, .5*unit)
  
  //outer column squares
  rect(width - spacer - 5.5*unit, height/2 - 3.5*unit, unit, unit)
  rect(width - spacer - 5.5*unit, height/2 - 1.75*unit, unit, unit)
  rect(width - spacer - 5.5*unit, height/2 +.75*unit, unit, unit)
  rect(width - spacer - 5.5*unit, height/2 + 2.5*unit, unit, unit)
  rect(width - spacer - 5.5*unit, height/2 + 4.25*unit, unit, unit)
  
  //inner column squares
  rect(width - spacer - 8.75*unit, height/2 - 3.5*unit, unit, unit)
  rect(width - spacer - 8.75*unit, height/2 - 1.75*unit, unit, unit)
  rect(width - spacer - 8.75*unit, height/2 +.75*unit, unit, unit)
  rect(width - spacer - 8.75*unit, height/2 + 2.5*unit, unit, unit)
  rect(width - spacer - 8.75*unit, height/2 + 4.25*unit, unit, unit)
    
  //BLACK LINES
  fill(28, 28, 28);
    
  //left branches
  //horizontal thru line
  rect(spacer + 1.25*unit, height/2 - unit/4, 5*unit, .5*unit)
  //outer column
  rect(spacer + 2.75*unit, height/2 - 1.5*unit, .5*unit, 6.5*unit)
  rect(spacer + 3.25*unit, height/2 - 1.5*unit, unit, .5*unit)
  rect(spacer + 3.25*unit, height/2 + 2.75*unit, unit, .5*unit)  
  rect(spacer + 3.25*unit, height/2 + 4.5*unit, unit, .5*unit)
  //inner column
  rect(spacer + 6*unit, height/2 - 3.25*unit, .5*unit, 8.25*unit)
  rect(spacer + 6.5*unit, height/2 - 3.25*unit, unit, .5*unit)
  rect(spacer + 6.5*unit, height/2 - 1.5*unit, unit, .5*unit)
  rect(spacer + 6.5*unit, height/2 + unit, unit, .5*unit)  
  rect(spacer + 6.5*unit, height/2 + 2.75*unit, unit, .5*unit)  
  rect(spacer + 6.5*unit, height/2 + 4.5*unit, unit, .5*unit)
    
  //right branches
  //horizontal thru line
  rect(width - spacer - 6.25*unit, height/2 - unit/4, 5*unit, .5*unit)
  //outer column
  rect(width - spacer - 3.25*unit, height/2 - 3.25*unit, .5*unit, 8.255*unit)
  rect(width - spacer - 4.25*unit, height/2 - 3.25*unit, unit, .5*unit)
  rect(width - spacer - 4.25*unit, height/2 - 1.5*unit, unit, .5*unit)
  rect(width - spacer - 4.25*unit, height/2 + unit, unit, .5*unit)
  rect(width - spacer - 4.25*unit, height/2 + 2.75*unit, unit, .5*unit)  
  rect(width - spacer - 4.25*unit, height/2 + 4.5*unit, unit, .5*unit)
  //inner column
  rect(width - spacer - 6.5*unit, height/2 - 3.25*unit, .5*unit, 8.25*unit)
  rect(width - spacer - 7.5*unit, height/2 - 3.25*unit, unit, .5*unit)
  rect(width - spacer - 7.5*unit, height/2 - 1.5*unit, unit, .5*unit)
  rect(width - spacer - 7.5*unit, height/2 + unit, unit, .5*unit)  
  rect(width - spacer - 7.5*unit, height/2 + 2.75*unit, unit, .5*unit)  
  rect(width - spacer - 7.5*unit, height/2 + 4.5*unit, unit, .5*unit)
}