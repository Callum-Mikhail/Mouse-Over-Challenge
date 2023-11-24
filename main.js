// Mouse Over Challenge

// Canvas
let cnv = document.getElementById("draw");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 400;

// Variables
let mouseX, mouseY;

let Rect2X = 100;
let Rect2Y = 250;
let Rect2length = 150;
let Rect2height = 125;

let circ2centreX = 425;
let circ2centreY = 300;
let circ2size = 75;

onGreen = false;
// mouse move handler
document.addEventListener("mousemove", mousemoveHandler);
function mousemoveHandler(e) {
  let cnvRect = cnv.getBoundingClientRect();

  mouseX = e.clientX - cnvRect.left;
  mouseY = e.clientY - cnvRect.top;
}

// Loop

requestAnimationFrame(loop);
function loop() {
  // BG
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 600, 400);
  // Red Rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(50, 50, 100, 50);

  if (mouseX >= 50 && mouseX <= 150 && mouseY >= 50 && mouseY <= 100) {
    document.body.style.backgroundColor = "red";
  }
  // Blue Circle
  ctx.lineWidth = 5;
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(400, 150, 50, 0, 2 * Math.PI);
  ctx.fill();
  let circ1distance = Math.sqrt((mouseX - 400) ** 2 + (mouseY - 150) ** 2);

  if (circ1distance <= 50) {
    document.body.style.backgroundColor = "blue";
  }
  // Green Rect
  ctx.fillStyle = "green";
  ctx.fillRect(Rect2X, Rect2Y, Rect2length, Rect2height);
  let Rect2X2 = Rect2X + Rect2length;
  let Rect2Y2 = Rect2Y + Rect2height;

  if (
    mouseX >= Rect2X &&
    mouseX <= Rect2X2 &&
    mouseY >= Rect2Y &&
    mouseY <= Rect2Y2
  ) {
    document.body.style.backgroundColor = "green";
    Rect2X = Math.random() * 550;
    Rect2Y = Math.random() * 350;
    Rect2length = Math.random() * 300;
    Rect2height = Math.random() * 300;
  }

  // Orange circle
  ctx.lineWidth = 5;
  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(circ2centreX, circ2centreY, circ2size, 0, 2 * Math.PI);
  ctx.fill();

  let circ2distance = Math.sqrt(
    (mouseX - circ2centreX) ** 2 + (mouseY - circ2centreY) ** 2
  );
  if (circ2distance <= circ2size) {
    document.body.style.backgroundColor = "orange";
    circ2centreX = Math.random() * 550;
    circ2centreY = Math.random() * 350;
    circ2size = Math.random() * 300;
  }
  requestAnimationFrame(loop);
}
