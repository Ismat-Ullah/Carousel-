tan = function getTranFormDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
};

let cells = document.querySelectorAll(".carousel .cell");
angle = 360 / cells.length;
n = 0;
r = Math.round(130 / tan(18));

carousel = document.querySelector(".carousel");
carousel.style.transform = "translateZ(" + -r + "px)";

next = document.querySelector(".next");
prev = document.querySelector(".prev");

function rotateCells() {
  cells.forEach((cell) => {
    cell.style.transform = "rotateY(" + n + "deg) translateZ(" + r + "px)";
    n += angle;
  });
}

rotateCells();

function rotateCarousel(n) {
  carousel.style.transform = "translateZ(" + -r + "px) rotateY(" + n + "deg) ";
}
rotateCarousel(n);

prev.addEventListener("click", (e) => {
  n += angle;
  rotateCarousel(n);
});

next.addEventListener("click", (e) => {
  rotateCarousel(n);
  n -= angle;
});
