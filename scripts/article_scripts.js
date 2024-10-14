var cols, rows,z,texture,scale;

function setup() {
  createCanvas(windowWidth , 1000);
  scale = 40;
  cols = Math.floor(50);
  rows = Math.floor(50);
  z = 0;
  texture = [];
  strokeWeight(3);
}

function draw() {
  background(13, 28, 48);
  stroke(255, 255, 255);
  noFill();
  for (x = 0; x < cols; x++) {
    texture[x] = [];
    for (y = 0; y < rows; y++) {
      texture[x][y] = 0;
    }
  }

  y_sample = 0;
  for (y = 0; y < rows; y++) {
    x_sample = 0;
    beginShape();
    for (x = 0; x < cols; x++) {
      texture[x][y] = map(noise(x_sample, y_sample, z), 0, 1, -100, 100);
      xpos = x * scale;
      ypos = y * scale + texture[x][y];
      vertex(xpos, ypos);
      x_sample += 0.1;
    }
    endShape();
    y_sample += 0.1;
  }


  z += 0.005;
}










