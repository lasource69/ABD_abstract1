const circleSpeed = 0.0001;

let circles = [];
const colours = [
  [255, 200, 20, 2],
  [10, 25, 100, 2],
  [50, 100, 255, 2]
];

setup = () => {
  createCanvas(windowWidth, windowHeight);
  for (let i = 28; i--; ) {
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
    for (let i = 360; i > 0; i -= 4) ellipse(c.x, c.y, i, i);
  }

  // Draw the text after drawing the circles
  let fontSize = min(width, height) * 0.1; // Calculate font size based on the smaller dimension
  textSize(fontSize);
  textFont("Roboto");

  // Set the font and style for "ART BASE"
  textStyle(BOLD);
  fill(255, 255, 0);
  text("ART", width * 0.5 - fontSize * 1.6, height * 0.5 - fontSize * 0.25);
  text("BASE", width * 0.5 - fontSize * 1.6, height * 0.5 + fontSize * 0.75);

  // Set the font and style for ".digital"
  textStyle(NORMAL);
  fill(255, 255, 255);
  text(".digital", width * 0.5 - fontSize * 0.8, height * 0.5 + fontSize * 1.5);
};

// Handle window resizing
windowResized = () => {
  resizeCanvas(windowWidth, windowHeight);
};
