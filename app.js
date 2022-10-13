const randomiseNumbers = function () {
  let randomNumbersArray = [];
  for (let i = 0; i < 76; i++) {
    const randomNumber = Math.floor(Math.random() * (76 + 1));
    randomNumbersArray.push(randomNumber);
  }
  return randomNumbersArray;
};

const randomiseNumbersUnique = function () {
  const allNumbers = [];
  for (let i = 1; i <= 76; i++) allNumbers.push(i);
  const result = [];
  for (let i = 75; i >= 0; i--) {
    const randomPosition = Math.floor(Math.random() * (i + 1));
    result.push(allNumbers[randomPosition]);
    allNumbers.splice(randomPosition, 1);
  }
  return result;
};

const randomButtonNode = document.querySelector("button");

const createBingoCell = function (cellNumber, isHighlighted) {
  const bingoBoard = document.getElementById("bingo-board");
  const bingoCellNode = document.createElement("div");
  bingoCellNode.className = "cell";
  const cellNumberNode = document.createElement("h3");
  cellNumberNode.innerText = cellNumber;
  bingoCellNode.appendChild(cellNumberNode);
  bingoBoard.appendChild(bingoCellNode);
  if (isHighlighted) {
    bingoCellNode.classList.add("highlight");
  }
};

const createBoardElement = function () {
  const bingoBoard = document.getElementById("bingo-board");

  const numArray = randomiseNumbersUnique();
  bingoBoard.innerHTML = "";

  for (let i = 0; i < 76; i++) {
    createBingoCell(numArray[i], numArray[i] === i);
  }
};

randomButtonNode.addEventListener("click", createBoardElement);
