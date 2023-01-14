var fr = 5; //adjust the speed by changing fr (the framerate)
let opacity = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("Courier New");
  background(255, 246, 230);
  frameRate(fr); 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 246, 230);
}

function draw(){
  textSize(height/21);
  
  for (let i = 0; i < 21; i++){
    if (frameCount % 22*fr > i*fr && frameCount % 22*fr <= (i+1)*fr) {
        fill(4, 55, 112,255);
        textStyle(BOLD);
        
        textAlign(RIGHT, TOP);
        text("God loves me", width/2 - 30, height/20*(i));
        
        textAlign(LEFT, TOP);
        text("I love myself", width/2 + 30, height/20*(19-i));
        
        //increase opacity of rectangles below
        fill(255, 246, 230, opacity);
        if(opacity >= 255) opacity = 0;
        else opacity = opacity + 225/19;
        
        //rectangles covering the previous line
        noStroke();
        rect(width/2 - 30 - textWidth("God loves me"), height/20*(i-1) , textWidth("God loves me"), height/20);
        rect(width/2 + 30, height/20*(20-i) , textWidth("I love myself"), height/20);
    } 
  }
      
}