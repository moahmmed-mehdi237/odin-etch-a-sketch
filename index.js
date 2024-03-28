const baseWidth = 480;
let cellNumber = 16;
let containerWidth = baseWidth;
let cellWidth = containerWidth / cellNumber;

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


const fillContainer = () => {
  for (let row = 0; row < cellNumber; row++) {
    for (let col = 0; col < cellNumber; col++) {
      const child = document.createElement("div");
      child.classList.add("cell", "clear");
      container.appendChild(child);
    }
  }
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    cell.style.width = cellWidth;
    cell.style.height = cellWidth;
  });
};


const clearContainer = () => {
  container.innerHTML = "";
};

const handleChange = () => {
  getInput();
  setWidth();
  clearContainer();
  fillContainer();
};

