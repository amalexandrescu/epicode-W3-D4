const createBingoCell = function () {
  const bingoBoard = document.getElementById("bingo-board");
  for (let i = 0; i < 76; i++) {
    const bingoCellNode = document.createElement("div");
    bingoCellNode.className = "cell";
    const cellNumberNode = document.createElement("h3");
    cellNumberNode.innerText = i + 1;
    bingoCellNode.appendChild(cellNumberNode);
    bingoBoard.appendChild(bingoCellNode);
  }
};

createBingoCell();

const randomiseNumbersUnique = function () {
  const allNumbers = [];
  for (let i = 1; i <= 76; i++) {
    allNumbers.push(i);
  }

  const result = [];

  for (let i = 76; i >= 1; i--) {
    const randomPosition = Math.ceil(Math.random() * i);
    result.push(allNumbers[randomPosition - 1]);
    allNumbers.splice(randomPosition - 1, 1);
  }

  return result;
};

let randomNumbersArray = randomiseNumbersUnique();
console.log(randomNumbersArray);

const h3List = document.querySelectorAll("h3");
let divList = document.querySelectorAll(".cell");

const highlightDrawNumber = function (number) {
  for (let i = 0; i < 76; i++) {
    if (number === parseInt(h3List[i].innerText)) {
      divList[i].classList.add("highlight");
    }
  }
};

// let counter = 0;

// const extractBingoNumbers = function () {
//   const actualDraw = randomNumbersArray[counter];
//   highlightDrawNumber(actualDraw);
//   highlightDrawNumber2(actualDraw);
//   counter++;
// };

// const drawNumberButtonNode = document.querySelector("button");

// drawNumberButtonNode.addEventListener("click", extractBingoNumbers);

let inputNode = document.querySelector("input");
let inputNumber = parseInt(inputNode.value);
let x = 1;

let anotherRandomArray = randomiseNumbersUnique();

const generateNewBingoBoard = function (num) {
  anotherRandomArray = randomiseNumbersUnique();
  inputNode = document.querySelector("input");

  inputNumber = parseInt(inputNode.value);

  const nameBoard = document.createElement("div");
  document.body.appendChild(nameBoard);
  nameBoard.classList.add("board");
  const divParent = document.createElement("div");
  document.body.appendChild(divParent);
  divParent.classList.add("customClass");
  for (let i = 0; i < num; i++) {
    nameBoard.innerText = `Board ${x}`;
    const bingoCellNode = document.createElement("div");
    bingoCellNode.className = "cell";
    const cellNumberNode = document.createElement("h4");
    cellNumberNode.innerText = anotherRandomArray[i];
    divParent.appendChild(bingoCellNode);
    bingoCellNode.appendChild(cellNumberNode);
  }
  x++;
};

let h4List = document.querySelectorAll("h4");
let h4ParentList = document.querySelectorAll(".customClass>div");

const input = function () {
  inputNode = document.querySelector("input");
  inputNumber = parseInt(inputNode.value);

  for (let i = 0; i < inputNumber; i++) {
    generateNewBingoBoard(24);
  }

  console.log("h4List: ", (h4List = document.querySelectorAll("h4")));
};

const generateButton = document.querySelector("#generateBoardsButton");
generateButton.addEventListener("click", input);

const highlightDrawNumber2 = function (number) {
  h4List = document.querySelectorAll("h4");
  h4ParentList = document.querySelectorAll(".customClass>div");

  for (let i = 0; i < h4List.length; i++) {
    if (number === parseInt(h4List[i].innerText)) {
      h4ParentList[i].classList.add("highlight");
    }
  }
};

let counter = 0;

const extractBingoNumbers = function () {
  const actualDraw = randomNumbersArray[counter];
  highlightDrawNumber(actualDraw);
  highlightDrawNumber2(actualDraw);
  counter++;
};

const drawNumberButtonNode = document.querySelector("button");

drawNumberButtonNode.addEventListener("click", extractBingoNumbers);
drawNumberButtonNode.addEventListener("click", extractBingoNumbers2);
