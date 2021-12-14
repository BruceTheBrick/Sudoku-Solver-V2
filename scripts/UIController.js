/**
 * Will update the innerHTML of the given cell to value
 * @param {Integer} cellId
 * @param {Integer} value
 */
function updateUI(cellId, value) {
  document.getElementById(cellId).innerHTML = value;
}

/**
 * Applies the 'default' css class to all cells that contain some value
 */
function renderDefaultCells() {
  document.querySelectorAll("div.cell").forEach(function (cell) {
    if (cell.innerHTML.trim().length > 0) {
      cell.classList.add("default");
    }
  });
}

/**
 * Removes the 'default', 'set' and 'active' css classes from all cells.
 * Also removes any innerHTML values
 */
function resetUI() {
  document.querySelectorAll("div.cell").forEach((cell) => {
    cell.classList.remove("default");
    cell.classList.remove("set");
    cell.classList.remove("active");
    cell.innerHTML = "";
  });
}

/**
 * Given a board object, will update the UI to display the corresponding value
 * in the board
 * @param {Array} board
 */
function initBoardUI(board) {
  //Traverses the board
  resetUI();
  for (var i = 0; i < NUM_ROWS; i++) {
    for (var j = 0; j < NUM_COLS; j++) {
      if (board[j][i] !== 0) {
        //Updates the UI with current value
        updateUI(getIdFromIndexes(j, i), board[j][i]);
      }
    }
  }
  renderDefaultCells();
}

/**
 * Traverses the board object, and updates the corresponding UI elements
 * @param {Array} board
 */
function updateBoardUI(board) {
  for (var i = 0; i < NUM_ROWS; i++) {
    for (var j = 0; j < NUM_COLS; j++) {
      var currentCell = document.getElementById(getIdFromIndexes(j, i));
      if (board[j][i] == 0) {
        currentCell.innerHTML = "";
      } else {
        currentCell.innerHTML = board[j][i];
        currentCell.classList.add("set");
      }
    }
  }
}

async function updateBoardUIAsync(board, y, x) {
  for (var i = 0; i < NUM_ROWS; i++) {
    for (var j = 0; j < NUM_COLS; j++) {
      var currentCell = document.getElementById(getIdFromIndexes(j, i));
      currentCell.classList.remove("active");
      if (board[j][i] !== 0) {
        currentCell.innerHTML = board[j][i];
        currentCell.classList.add("set");
      } else {
        currentCell.innerHTML = "";
        currentCell.classList.remove("set");
      }
    }
  }
  document.getElementById(getIdFromIndexes(y, x)).classList.add("active");
}

function showSuccess() {
  swal.fire({
    title: "Game complete!",
    text: "The game completed in " + numIterations + " iterations!",
    type: "success",
    confirmButtonText: "Confirm",
    customClass: {
      popup: "popup-background",
      icon: "icon",
      title: "popup-text",
    },
  });
}

function showFail() {
  swal.fire({
    title: "Game Incomplete!",
    text:
      "After " +
      numIterations +
      " moves, I unfortunately cannot complete this game!",
    type: "error",
    confirmButtonText: "Confirm",
    customClass: {
      popup: "popup-background",
      icon: "icon",
      title: "popup-text",
    },
  });
}

function showWait() {
  swal.fire({
    title: "Game In Progress!",
    text: "There is a game in progress, please wait.",
    type: "info",
    confirmButtonText: "Confirm",
    customClass: {
      popup: "popup-background",
      icon: "icon",
      title: "popup-text",
    },
  });
}

function updateSpeedUI(newSpeed) {
  document.getElementById("gameSpeed").innerHTML = newSpeed;
}

function updateDifficultyUI(newSpeed) {
  document.getElementById("gameDifficulty").innerHTML = newSpeed;
}
