let gameBoard = [];
let currentPuzzle = [];
let numIterations = 0;
let numTicks = 1;
let numSpaces = 31;
let delayMilis = 500;
let isExecuting = false;

let NUM_ROWS = 9;
let NUM_COLS = 9;
let MAX_VALUE = 9;
let MIN_VALUE = 1;

/**
 * Fires when the whole window has loaded.
 * Creates a new puzzle and updates the UI accordingly
 */
window.onload = async () => {
  gameBoard = await generateNewPuzzle(emptyBoard());
  initBoardUI(gameBoard);
  currentPuzzle = deepCopy(gameBoard);
  addCellHandlers();
  addInputListener();
};

/**
 * Will begin to solve the current gameBoard.
 */
async function startGame() {
  if (!isExecuting) {
    isExecuting = true;
    var res = await solve(gameBoard);
    if (res !== -1) {
      showSuccess();
      updateBoardUI(res);
    } else {
      showFail();
    }

    isExecuting = false;
    numIterations = 0;
  } else {
    showWait();
  }
}

/**
 * Given a board, will fill the board with values that comply with sudoku
 * rules
 * @param {Array} board
 * @returns {Array} board
 */
async function solve(board) {
  //Traversing the board
  for (var y = 0; y < NUM_ROWS; y++) {
    for (var x = 0; x < NUM_COLS; x++) {
      //Current space is empty
      if (board[y][x] == 0) {
        //Iterates over all allowed values
        for (var k = MIN_VALUE; k <= MAX_VALUE; k++) {
          //Checks if the current move (k) is allowed to be placed
          numIterations++;
          if (isValid(board, y, x, k)) {
            board[y][x] = k;

            //Used to control UI upadtes. Enables the ability to visualise the solving
            //process in a reasonable time
            if (numIterations % numTicks == 0) {
              await delay(delayMilis);
              await updateBoardUIAsync(board, y, x);
            }
            var res = await solve(board);
            if (res !== -1) return res;

            board[y][x] = 0;
          }
        }
        return -1;
      }
    }
  }
  return board;
}

/**
 *Given a board object, indexes for an element in the board, and a value,
 *will return true or false if the value can be placed in that location
 * @param {Array} board
 * @param {Integer} y
 * @param {Integer} x
 * @param {Integer} value
 * @returns
 */
function isValid(board, y, x, value) {
  //Check all the cells in the same row
  for (var i = 0; i < NUM_ROWS; i++) {
    if (board[y][i] == value) return false;
  }

  //Check all the cells in the same column
  for (var i = 0; i < NUM_COLS; i++) {
    if (board[i][x] == value) return false;
  }

  //Check all the cells in the same 3*3 section
  var row = y - (y % 3);
  var col = x - (x % 3);
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (board[i + row][j + col] == value) return false;
    }
  }
  return true;
}

/**
 * Updates the numTicks before a new frame is rendered on the screen
 * @param {Integer} newVal
 */
function speedUpdated(value) {
  delayMilis = parseInt(500 - value);
  console.log(delayMilis);
  numTicks = delayMilis < 40 ? 1000 : 1;
  console.log(numTicks);
}

/**
 * This fire functions whenever the difficulty input is used.
 * Affects the number of spaces that will be pre-filled in a board
 * @param {Integer} value
 * @returns
 */
function difficultyUpdated(value) {
  value = parseInt(value);

  //Ensures the value is within a valid range
  if (value < 0 || value > 81) {
    alert("Please enter a value between 1 and 81 inclusive!");
    console.log(document.getElementById("gameDifficulty"));
    document.getElementById("gameDifficulty").value = value < 1 ? 0 : 81;
    return;
  }
  numSpaces = 81 - parseInt(value);
  generateNewPuzzle();
}
