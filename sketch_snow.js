let flowers = [];
let lights = [];

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < 50; i++) {
    flowers.push(new Flower());
  }
  for (let i = 0; i < 100; i++) {
    lights.push(new Light());
  }
}

function draw() {
  background(173, 216, 230); // Light blue background
  
  // Draw light particles
  for (let light of lights) {
    light.update();
    light.display();
  }
  
  // Draw flowers
  for (let flower of flowers) {
    flower.update();
    flower.display();
  }
  
  // Draw princess
//  drawPrincess(400, 400);
}

function drawPrincess(x, y) {
  // Draw dress
  fill(255, 105, 180);
  beginShape();
  vertex(x - 50, y + 100);
  vertex(x + 50, y + 100);
  vertex(x + 40, y);
  vertex(x - 40, y);
  endShape(CLOSE);
  
  // Draw head
  fill(255, 228, 196);
  ellipse(x, y - 50, 50, 50);
  
  // Draw hair
  fill(139, 69, 19);
  arc(x, y - 50, 55, 55, PI, TWO_PI);
  
  // Draw eyes
  fill(0);
  ellipse(x - 10, y - 55, 5, 5);
  ellipse(x + 10, y - 55, 5, 5);
  
  // Draw mouth
  stroke(0);
  strokeWeight(2);
  noFill();
  arc(x, y - 45, 10, 5, 0, PI);
  noStroke();
  
  // Draw crown
  fill(255, 223, 0);
  beginShape();
  vertex(x - 15, y - 70);
  vertex(x + 15, y - 70);
  vertex(x + 10, y - 85);
  vertex(x, y - 95);
  vertex(x - 10, y - 85);
  endShape(CLOSE);
}

class Flower {
  constructor() {
    this.x = random(width);
    this.y = random(-200, -100);
    this.speed = random(1, 3);
    this.size = random(10, 20);
  }
  
  update() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.x = random(width);
    }
  }
  
  display() {
    fill(254, 254, 254);
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}

class Light {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speedX = random(-1, 1);
    this.speedY = random(-1, 1);
    this.size = random(5, 10);
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
      this.x = random(width);
      this.y = random(height);
    }
  }
  
  display() {
    fill(255, 255, 255, 128); // Semi-transparent
    noStroke();
    ellipse(this.x, this.y, this.size);
  }
}
