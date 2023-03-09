let angle = 0;
let numSquares = 14;
let squareSpacing = 360 / numSquares;
let pulse = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 246, 230);
  angleMode(DEGREES);
  strokeWeight(2);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255, 246, 230);
  angleMode(DEGREES);
  strokeWeight(2);
}

function draw() {
  background(255, 246, 230);

  // Set the color of the squares
  // stroke((colorIndex * 10) % 360, 80, 80, 50 + 30 * sin(pulse));
  stroke(4, 55, 112, 50 + 30 * sin(pulse));

  // Draw the squares
  for (let i = 0; i < numSquares; i++) {
    let x = width / 2 + cos(angle + i * squareSpacing) * 80 * sin(pulse);
    let y = height / 2 + sin(angle + i * squareSpacing) * 80 * sin(pulse);
    let r = 10 + 10 * sin(pulse * 2);
    //drawSquare(x, y, r);
    drawLines(x, y, r);
    drawPoints(x, y, r);
  }

  // Increment the angle and color index
  angle += 0.5;

  // Increment the pulse
  pulse += 1;
}

function drawSquare(x, y, r) {
  square(x - r / 2, y - r / 2, r);
}

function drawLines(x, y, r) {
  let lineLength = r * 3;
  let angleStep = 360 / 3;
  for (let i = 0; i < 3; i++) {
    let x1 = x + r / 2 * cos(i * angleStep);
    let y1 = y + r / 2 * sin(i * angleStep);
    let x2 = x + lineLength * cos(i * angleStep);
    let y2 = y + lineLength * sin(i * angleStep);
    line(x1, y1, x2, y2);
  }
}

function drawPoints(x, y, r) {
  let pointSpacing = r / .2; //original was 1.5
  for (let i = 0; i < 14; i++) {
    let angleStep = 360 / 14;
    for (let j = 0; j < 14; j++) {
      let x1 = x + (r / 2 + pointSpacing * i) * cos(j * angleStep);
      let y1 = y + (r / 2 + pointSpacing * i) * sin(j * angleStep);
      point(x1, y1);
    }
  }
}
