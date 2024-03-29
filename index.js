const baseWidth = 480;
let cellNumber = 16;
let containerWidth = baseWidth;
let cellWidth = containerWidth / cellNumber;
let rainbow = false;
let eraser = false;

const container = document.querySelector("#container");
let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const getRandomInt = (num) => {
  return Math.floor(Math.random() * num);
};

const getInput = () => {
  input = prompt("enter n such that the width of the board is nxn");
  cellNumber = parseInt(input);
};

const setWidth = () => {
  containerWidth =
    baseWidth % cellNumber !== 0
      ? baseWidth + cellNumber - (baseWidth % cellNumber)
      : baseWidth;
  console.log(containerWidth);
  cellWidth = containerWidth / cellNumber;
  console.log(cellWidth);
  container.style.width = containerWidth;
  container.style.height = containerWidth;
};

const clearContainer = () => {
  container.innerHTML = "";
};

const fillContainer = () => {
  clearContainer();
  for (let row = 0; row < cellNumber; row++) {
    for (let col = 0; col < cellNumber; col++) {
      const child = document.createElement("div");
      child.style.width = cellWidth;
      child.style.height = cellWidth;
      child.classList.add("cell", "clear");
      container.appendChild(child);
      child.addEventListener("mousedown", fillCell);
      child.addEventListener("mouseover", fillCell);
    }
  }
};

const handleChange = () => {
  getInput();
  setWidth();
  fillContainer();
};

const fillGray = (e) => {
  e.target.style.backgroundColor = "#8f8f8f";
};

const fillRainbow = (e) => {
  const green = getRandomInt(256);
  const red = getRandomInt(256);
  const blue = getRandomInt(256);
  const color = `rgb(${red},${green},${blue})`;
  if (!e.target.style.backgroundColor) {
    e.target.style.backgroundColor = color;
  }
};

const erase = (e) => {
  e.target.style.backgroundColor = "";
};

const fillCell = (e) => {
  if (e.type === "mousedown" || mouseDown) {
    if (eraser) erase(e);
    else if (rainbow) fillRainbow(e);
    else fillGray(e);
  }
};

const changeToRainbow = (e) => {
  rainbow = !rainbow;
  changeButtonColor(e);
  console.log(rainbow);
};

const changeToEraser = (e) => {
  eraser = !eraser;
  changeButtonColor(e);
  console.log(eraser);
};

fillContainer();

const changeButtonColor = (e) => {
  styles = e.target.style;
  styles.backgroundColor =
    styles.backgroundColor == "black" ? "white" : "black";
  styles.color = styles.backgroundColor == "black" ? "white" : "black";
};
