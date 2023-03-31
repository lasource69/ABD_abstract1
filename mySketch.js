const circleSpeed = 0.0001;

let circles = [];
const colours = [  [255, 200, 20, 2],
  [10, 25, 100, 2],
  [50, 100, 255, 2]
];

let font;

preload = () => {
  font = loadFont('Roboto-Regular.ttf');
};

setup = () => {
  createCanvas(windowWidth, windowHeight);
  for (let i = 14; i--; ) {
    const degree = random(TAU);
    circles.push({
      x: random(width),
      y: random(height),
      vx: cos(degree) * 4,
      vy: sin(degree) * 4,
      colour: colours[i % 3]
    });
  }
};

draw = () => {
  background(70, 15);
  noStroke();
  for (const c of circles) {
    // update
    c.x += c.vx;
    c.y += c.vy;
    if (c.x < 0 || c.x > width) c.vx = -c.vx;
    if (c.y < 0 || c.y > height) c.vy = -c.vy;
    // show
    fill(c.colour);
    for (let i = 90; i > 0; i -= 4) ellipse(c.x, c.y, i, i);
  }

  // Draw the text after drawing the circles
  textSize(120);
  textFont(font);

  // Set the font and style for "ART BASE"
  textStyle(BOLD);
  fill(255, 255, 0);
  text("ART", width * 0.5 - 130, height * 0.5);
  text("BASE", width * 0.5 - 130, height * 0.5 + 80);

  // Set the font and style for ".digital"
  textStyle(NORMAL);
  fill(255, 255, 255);
  text(".digital", width * 0.5 - 80, height * 0.5 + 160);
};

// Handle window resizing
windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
};
