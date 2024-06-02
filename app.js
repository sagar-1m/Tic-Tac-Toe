let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let newButton = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const newGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      box.style.color = "#e09f3e";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "green";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};

const checkWinner = () => {
  for (let pattern of patterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
      }
    }
  }
};

newButton.addEventListener("click", newGame);
resetButton.addEventListener("click", newGame);
