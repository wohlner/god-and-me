let unit;
let spacer = 5;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  translate(-windowWidth/2, -windowHeight/2, 0); //remove if not using WEBGL renderer 
    
  background(255,255,255)
  //sets the unit of measurement for the whole piece
  if (windowWidth > windowHeight) {unit = windowWidth/30;}
  if (windowHeight >= windowWidth) {unit = windowHeight/40;}
  
  rectMode(CORNER);
  noStroke();

  push();
  //LEFT TREE
  fill(50, 168, 82); //green house
  rect(spacer,windowHeight/2 - unit, unit, 2*unit);
  rect(spacer + unit, windowHeight/2 - unit, 1.5*unit, .5*unit)
  rect(spacer + unit, windowHeight/2 + unit/2, 1.5*unit, .5*unit)
  
  //outer column green squares
  //rect(spacer + 4.5*unit, windowHeight/2 - 3.5*unit, unit, unit)
  rect(spacer + 4.5*unit, windowHeight/2 - 1.75*unit, unit, unit)
  //rect(spacer + 4.5*unit, windowHeight/2 +.75*unit, unit, unit)
  rect(spacer + 4.5*unit, windowHeight/2 + 2.5*unit, unit, unit)
  rect(spacer + 4.5*unit, windowHeight/2 + 4.25*unit, unit, unit)
  
  //inner column green squares
  rect(spacer + 7.75*unit, windowHeight/2 - 3.5*unit, unit, unit)
  rect(spacer + 7.75*unit, windowHeight/2 - 1.75*unit, unit, unit)
  rect(spacer + 7.75*unit, windowHeight/2 +.75*unit, unit, unit)
  rect(spacer + 7.75*unit, windowHeight/2 + 2.5*unit, unit, unit)
  rect(spacer + 7.75*unit, windowHeight/2 + 4.25*unit, unit, unit)
  
  //RIGHT TREE
  fill(250, 77, 149); //pink house
  rect(windowWidth - spacer - unit,windowHeight/2 - unit, unit, 2*unit);
  rect(windowWidth - spacer - 2.5*unit, windowHeight/2 - unit, 1.5*unit, .5*unit)
  rect(windowWidth - spacer - 2.5*unit, windowHeight/2 + unit/2, 1.5*unit, .5*unit)
  
  //outer column pink squares
  rect(windowWidth - spacer - 5.5*unit, windowHeight/2 - 3.5*unit, unit, unit)
  rect(windowWidth - spacer - 5.5*unit, windowHeight/2 - 1.75*unit, unit, unit)
  rect(windowWidth - spacer - 5.5*unit, windowHeight/2 +.75*unit, unit, unit)
  rect(windowWidth - spacer - 5.5*unit, windowHeight/2 + 2.5*unit, unit, unit)
  rect(windowWidth - spacer - 5.5*unit, windowHeight/2 + 4.25*unit, unit, unit)
  
  //inner column pink squares
  rect(windowWidth - spacer - 8.75*unit, windowHeight/2 - 3.5*unit, unit, unit)
  //rect(windowWidth - spacer - 8.75*unit, windowHeight/2 - 1.75*unit, unit, unit)
  rect(windowWidth - spacer - 8.75*unit, windowHeight/2 +.75*unit, unit, unit)
  rect(windowWidth - spacer - 8.75*unit, windowHeight/2 + 2.5*unit, unit, unit)
  rect(windowWidth - spacer - 8.75*unit, windowHeight/2 + 4.25*unit, unit, unit)
    
  //BLACK LINES
  fill(28, 28, 28);
    
  //left branches
  //horizontal thru line
  rect(spacer + 1.25*unit, windowHeight/2 - unit/4, 5*unit, .5*unit)
  //outer column
  rect(spacer + 2.75*unit, windowHeight/2 - 1.5*unit, .5*unit, 6.5*unit)
  rect(spacer + 3.25*unit, windowHeight/2 - 1.5*unit, unit, .5*unit)
  rect(spacer + 3.25*unit, windowHeight/2 + 2.75*unit, unit, .5*unit)  
  rect(spacer + 3.25*unit, windowHeight/2 + 4.5*unit, unit, .5*unit)
  //inner column
  rect(spacer + 6*unit, windowHeight/2 - 3.25*unit, .5*unit, 8.25*unit)
  rect(spacer + 6.5*unit, windowHeight/2 - 3.25*unit, unit, .5*unit)
  rect(spacer + 6.5*unit, windowHeight/2 - 1.5*unit, unit, .5*unit)
  rect(spacer + 6.5*unit, windowHeight/2 + unit, unit, .5*unit)  
  rect(spacer + 6.5*unit, windowHeight/2 + 2.75*unit, unit, .5*unit)  
  rect(spacer + 6.5*unit, windowHeight/2 + 4.5*unit, unit, .5*unit)
    
  //right branches
  //horizontal thru line
  rect(windowWidth - spacer - 6.25*unit, windowHeight/2 - unit/4, 5*unit, .5*unit)
  //outer column
  rect(windowWidth - spacer - 3.25*unit, windowHeight/2 - 3.25*unit, .5*unit, 8.255*unit)
  rect(windowWidth - spacer - 4.25*unit, windowHeight/2 - 3.25*unit, unit, .5*unit)
  rect(windowWidth - spacer - 4.25*unit, windowHeight/2 - 1.5*unit, unit, .5*unit)
  rect(windowWidth - spacer - 4.25*unit, windowHeight/2 + unit, unit, .5*unit)
  rect(windowWidth - spacer - 4.25*unit, windowHeight/2 + 2.75*unit, unit, .5*unit)  
  rect(windowWidth - spacer - 4.25*unit, windowHeight/2 + 4.5*unit, unit, .5*unit)
  //inner column
  rect(windowWidth - spacer - 6.5*unit, windowHeight/2 - 3.25*unit, .5*unit, 8.25*unit)
  rect(windowWidth - spacer - 7.5*unit, windowHeight/2 - 3.25*unit, unit, .5*unit)
  //rect(windowWidth - spacer - 7.5*unit, windowHeight/2 - 1.5*unit, unit, .5*unit)
  rect(windowWidth - spacer - 7.5*unit, windowHeight/2 + unit, unit, .5*unit)  
  rect(windowWidth - spacer - 7.5*unit, windowHeight/2 + 2.75*unit, unit, .5*unit)  
  rect(windowWidth - spacer - 7.5*unit, windowHeight/2 + 4.5*unit, unit, .5*unit)
  pop();

}