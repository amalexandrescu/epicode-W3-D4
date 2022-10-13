const randomiseNumbers = function () {
  let randomNumbersArray = [];
  for (let i = 0; i < 76; i++) {
    const randomNumber = Math.floor(Math.random() * (76 + 1));
    randomNumbersArray.push(randomNumber);
  }
  return randomNumbersArray;
};

const randomButtonNode = document.querySelector("button");

const createBoardElement = function () {
  const numArray = randomiseNumbers();
  const bingoBoard = document.getElementById("bingo-board");
  bingoBoard.innerHTML = "";

  for (let i = 0; i < 76; i++) {
    const bingoCellNode = document.createElement("div");
    bingoCellNode.className = "cell";
    const cellNumberNode = document.createElement("h3");
    cellNumberNode.innerText = numArray[i];
    bingoCellNode.appendChild(cellNumberNode);
    bingoBoard.appendChild(bingoCellNode);
    if (i === numArray[i]) {
      bingoCellNode.classList.add("highlight");
    }
  }
};

randomButtonNode.addEventListener("click", createBoardElement);
