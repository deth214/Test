console.log("JS loaded");

let cube = document.getElementById("cube");

if (!cube) {
  console.log("Cube not found");
}

let x = 200;
let y = 200;

let dx = 2;
let dy = 2;

let angle = 0;

function animate() {
  x += dx;
  y += dy;

  // Bounce on edge
  if (x <= 0 || x + 100 >= window.innerWidth) {
    dx *= -1;
  }

  if (y <= 0 || y + 100 >= window.innerHeight) {
    dy *= -1;
  }

  angle += 1;

  cube.style.transform =
    `translate3d(${x}px, ${y}px, 0)
    rotateX(${angle}deg)
    rotateY(${angle}deg)
    translateZ(50px)`;

  requestAnimationFrame(animate);
}

animate();
