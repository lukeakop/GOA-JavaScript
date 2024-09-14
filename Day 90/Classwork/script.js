const childD123 = document.getElementById('child');

let positionX = 0;
let positionY = 0;
let direction = 'right';

function animateBox(){
  if (direction === "right") {
    positionX++;
    if (positionX >= 400) {
      direction = "bottom";
    }
  } else if (direction === "bottom") {
    positionY++;
    if (positionY >= 400) {
      direction = "left";
    }
  } else if (direction === "left") {
    positionX--;
    if (positionX <= 0) {
      direction = "top";
    }
  } else if (direction === "top") {
    positionY--;
    if (positionY <= 0) {
      direction = "right";
    }
  }

  childD123.style.left = positionX + 'px';
  childD123.style.top = positionY + 'px';
 
}

setInterval(animateBox, 20);
