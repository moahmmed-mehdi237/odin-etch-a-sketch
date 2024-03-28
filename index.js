const baseWidth = 480;
let cellNumber = 16;
let containerWidth = baseWidth;
let cellWidth = containerWidth / cellNumber;
let rainbow = false;

const container = document.querySelector("#container");


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
};

const clearContainer = () => {
  container.innerHTML = "";
};

const fillContainer = () => {
  for (let row = 0; row < cellNumber; row++) {
    for (let col = 0; col < cellNumber; col++) {
      const child = document.createElement("div");
      child.classList.add("cell", "clear");
      container.appendChild(child);
      child.addEventListener("pointerdown", fillCell);
    }
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.width = cellWidth;
    cell.style.height = cellWidth;
  });
};


const handleChange = () => {
  getInput();
  setWidth();
  clearContainer();
  fillContainer();
};

const fillGray = (e) => {
  e.target.style.backgroundColor = "#8f8f8f";
};

const fillRainbow = () => {
  console.log("this fills rainbow");
};

const fillCell = (e) => {
  if (rainbow) fillRainbow(e);
  else fillGray(e);
};
