console.log("JS loaded")
let cube = document.getElementById("cube");

let x = 100;
let y = 100;

let dx = 2;
let dy = 2;

let angle = 0;

function animate() {
  x += dx;
  y += dy;

  //Bounce on edge
  if (x <=0 || x + 100 >= window.innerWidth} {
    dx *= -1;
  }

  if (y <= 0 || y + 100 >= window.innerHeight) {
    dy *= -1;
  }

  angle += 1;

  cube.style.transform = 'translate(${x}px, $(y)px) rotateX(${angle}deg) rotateY(${angle}deg)';

  requestAnimationFrame(animate);
}

animate();
