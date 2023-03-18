let landscape;

function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  landscape = new Landscape(34, 34);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  landscape = new Landscape(34, 34);
}

function draw() {
  background(135, 206, 250); // sky blue background
  landscape.display();
  sphere3DAnimation();
  
  function sphere3D(mult, strokeColor, fillColor, x, z) {
    fill(fillColor)
    //small box
    stroke(strokeColor); 
    rotateX(frameCount * x);
    rotateZ(frameCount * z);
    sphere(mult*34)
  }
  
  function sphere3DAnimation() {
  let oscillation = tan(frameCount * 0.02) * 500;

  push();
  translate(oscillation/2, oscillation/10 + 3* 34);
  sphere3D(2, color(255, 249, 194), color(245, 221, 17), -0.005, -0.015);
  pop();
}
  
  if (millis() % 2000 < 10) {
    landscape.updateTerrain();
  }
}

class Landscape {
  constructor(rows, cols) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = min(width / cols - 1, height / rows - 1);
    this.terrain = [];

    // Generate initial terrain
    for (let i = 0; i < rows; i++) {
      this.terrain[i] = [];
      for (let j = 0; j < cols; j++) {
        this.terrain[i][j] = random(50, 150);
      }
    }
  }

  display() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let x = j * this.cellSize;
        let y = i * this.cellSize;
        let terrainHeight = this.terrain[i][j];
        let terrainColor = map(terrainHeight, 50, 168, 82, 255);
        fill(34, 139, 34, terrainColor); // Green color for land
        stroke(28,28,28);
        strokeWeight(2);
        rectMode(CORNER);
        rect(x - (this.cellSize * 34)/2, y -(this.cellSize * 34)/2, this.cellSize, this.cellSize);
      }
    }
  }
  
  updateTerrain() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.terrain[i][j] = random(50, 150);
      }
    }
  }
}
