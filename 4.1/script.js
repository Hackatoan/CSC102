//Jacob Harris - 10 - 6 - 2024

//defining the elements in the html
let startbtn = document.getElementById("startbtn");
let disablebtn = document.getElementById("stopbtn");
let image = document.getElementById("movableImage");
let container = document.getElementById("container");

//allows for the movement loop
let interval;

//so that the image changes directions once it hits an edge
let right = false;
let down = false;

//handles movement
function move() {
  //interval is used to run something on a loop without blocking other inputs from working
  interval = setInterval(function () {
    //offset gets the distance from the outer border including margin
    //allows us to work from the center
    let left = image.offsetLeft;
    let top = image.offsetTop;

    //logic that determines if we are against a wall if so change direction
    if (left < 1) {
      right = true;
    }
    if (top < 1) {
      down = true;
    }
    if (left > container.clientWidth - image.clientWidth) {
      right = false;
    }
    if (top > container.clientHeight - image.clientHeight) {
      down = false;
    }

    //depending on the direction calculated above it adds or subtracts 1 or 2 from the offset position.
    //we use a random number to avoid the image getting stuck in a perfect loop
    if (down) {
      top += 1 + Math.floor(Math.random() * 1);
    } else {
      top -= 1 + Math.floor(Math.random() * 1);
    }
    if (right) {
      left += 1 + Math.floor(Math.random() * 1);
    } else {
      left -= 1 + Math.floor(Math.random() * 1);
    }

    //applies the position to the image on screen
    image.style.left = `${left}px`;
    image.style.top = `${top}px`;
  }, 10);
}

//simply ends the movement loop
function stopmove() {
  clearInterval(interval);
}

//stop should be disabled at the start
disablebtn.disabled = true;

//i want the image to start at a random location so
//generate a random number between the size of 0 and the container minus the image
let ls = (image.offsetLeft.left = Math.floor(
  Math.random() * (container.clientWidth - image.clientWidth)
));
let ts = (image.offsetHeight.top = Math.floor(
  Math.random() * (container.clientHeight - image.clientHeight)
));
image.style.left = `${ls}px`;
image.style.right = `${ts}px`;

//event listeners
startbtn.addEventListener("click", function () {
  disablebtn.disabled = false;
  startbtn.disabled = true;
  move();
});
disablebtn.addEventListener("click", function () {
  stopmove();
  disablebtn.disabled = true;
  startbtn.disabled = false;
});
