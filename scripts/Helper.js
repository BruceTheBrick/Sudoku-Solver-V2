/**
 * Returns an empty game board
 * @returns {Array} board
 */
function emptyBoard() {
  var board = [];
  for (var i = 0; i < 9; i++) {
    board[i] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }
  return board;
}

/**
 * Returns the ID of the cell in UI that's represented by the given array indexes
 * @param {Integer} i Current column value
 * @param {Integer} j Current row value
 * @returns The ID of the cell in the UI that corresponds to these indexes
 */
function getIdFromIndexes(i, j) {
  return j * 9 + i;
}

/**
 * Prints the given board to console
 * @param {Array} board
 */
function printBoard(board) {
  var str = "";
  for (var i = 0; i < 9; i++) {
    str += "|";
    for (var j = 0; j < 9; j++) {
      str += board[j][i];
      str += "|";
    }
    str += "\n";
  }
  console.log(str);
}

/**
 * Used to input a new value into a cell
 * @returns null
 */
function submitValue(value) {
  var val = parseInt(value);
  if (val < 1 || val > 9) {
    alert("Invalid number. Please enter a value between 1 and 9 inclusive.");
    inputBox.value = null;
    return;
  }
  var cell = document.querySelector("div.active");
  cell.innerHTML = val;
  inputBox.value = null;
}

/**
 * Given a cellId, returns the Id of the column that it belongs to
 * @param {Integer} cellId
 * @returns {Integer} cellId
 */
function getColId(cellId) {
  while (cellId > 8) cellId = cellId - 9;
  return cellId;
}

function getRowId(cellId) {
  //First row
  if (cellId >= 0 && cellId <= 8) {
    return 0;
  }

  //Second row
  else if (cellId >= 9 && cellId <= 17) {
    return 1;
  }

  //Third row
  else if (cellId >= 18 && cellId <= 26) {
    return 2;
  }

  //Fourth row
  else if (cellId >= 27 && cellId <= 35) {
    return 3;
  }

  //Fifth row
  else if (cellId >= 36 && cellId <= 44) {
    return 4;
  }

  //Sixth row
  else if (cellId >= 45 && cellId <= 53) {
    return 5;
  }

  //Seventh row
  else if (cellId >= 54 && cellId <= 62) {
    return 6;
  }

  //Eigth row
  else if (cellId >= 63 && cellId <= 71) {
    return 7;
  }

  //Ninth row
  else {
    return 8;
  }
}

//Function that enables inducing a delay more easily than directly using setTimeout
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
function getMoves() {
  var nums = [];
  for (var i = MIN_VALUE; i < MAX_VALUE + 1; i++) {
    nums.push(i);
  }
  return nums;
}

function resetBoardAndUI() {
  if (!isExecuting) {
    gameBoard = deepCopy(currentPuzzle);
    initBoardUI(gameBoard);
    numIterations = 0;
  } else {
    showWait();
  }
}

function getNextNum() {
  var res = Math.round(Math.random() * (MAX_VALUE - MIN_VALUE) + MIN_VALUE);
  return res;
}

function deepCopy(input) {
  return JSON.parse(JSON.stringify(input));
}

function addSliderHandler() {
  document.getElementById("slider").addEventListener("input", speedUpdated);
}
