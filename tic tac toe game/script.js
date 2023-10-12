const cells = document.querySelectorAll(".cell");
const resultElement = document.getElementById("result");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function makeMove(cellIndex) {
  if (gameBoard[cellIndex] === "" && gameActive) {
    gameBoard[cellIndex] = currentPlayer;
    cells[cellIndex].textContent = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);

    if (checkWin()) {
      resultElement.textContent = `${currentPlayer} wins!`;
      gameActive = false;
    } else if (gameBoard.every((cell) => cell !== "")) {
      resultElement.textContent = "It's a draw!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Columns
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];

  return winningCombos.some((combo) => {
    const [a, b, c] = combo;
    return (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c]
    );
  });
}

function resetBoard() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("X", "O");
  });
  resultElement.textContent = "";
}

cells.forEach((cell) =>
  cell.addEventListener("click", () => makeMove([...cells].indexOf(cell)))
);
