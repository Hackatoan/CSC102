//Jacob Harris - 10 - 6 - 2024

//defining the elements in the html
let image = document.getElementById("movableImage");
let container = document.getElementById("container");
let mvleft,
  mvright,
  mvup,
  mvdown = true;

//allows for the movement loop
let interval;

//handles movement
function move(direction) {
  //interval is used to run something on a loop without blocking other inputs from working
  interval = setInterval(function () {
    //offset gets the distance from the outer border including margin
    //allows us to work from the center
    let left = image.offsetLeft;
    let top = image.offsetTop;

    //logic that determines if we are against a wall if so dont keep moving
    if (left < 1) {
      mvleft = false;
    } else {
      mvleft = true;
    }
    if (top < 1) {
      mvup = false;
    } else {
      mvup = true;
    }
    if (left > container.clientWidth - image.clientWidth) {
      mvright = false;
    } else {
      mvright = true;
    }
    if (top > container.clientHeight - image.clientHeight) {
      mvdown = false;
    } else {
      mvdown = true;
    }

    if (direction === "right") left += 5;
    if (direction === "left") left -= 5;
    if (direction === "up") top -= 5;
    if (direction === "down") top += 5;

    //applies the position to the image on screen
    image.style.left = `${left}px`;
    image.style.top = `${top}px`;
  }, 10);
}

//simply ends the movement loop
function stopmove() {
  clearInterval(interval);
}

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
