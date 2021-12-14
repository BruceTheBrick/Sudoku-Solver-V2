async function generateNewPuzzle() {
  if (!isExecuting) {
    isExecuting = true;
    //Solves an empty board
    numberOfIterations = 0;
    var board = await startNewPuzzleCreation(emptyBoard());

    //Removes values to give a fresh board
    board = removeSpaces(board, numSpaces);
    currentPuzzle = deepCopy(board);
    gameBoard = board;
    resetUI();
    initBoardUI(board);
    isExecuting = false;
    return board;
  } else {
    showWait();
  }
}

async function startNewPuzzleCreation(board) {
  for (var y = 0; y < NUM_ROWS; y++) {
    for (var x = 0; x < NUM_COLS; x++) {
      //Current space is empty
      if (board[y][x] == 0) {
        var moves = getRandomMoves();
        for (var k = 0; k < moves.length; k++) {
          if (isValid(board, y, x, moves[k])) {
            board[y][x] = moves[k];
            var res = await startNewPuzzleCreation(board);
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

function removeSpaces(board, numSpaces) {
  while (numSpaces > 0) {
    var y = getNextNum() - 1;
    var x = getNextNum() - 1;
    if (board[y][x] != 0) {
      board[y][x] = 0;
      numSpaces--;
    }
  }
  return board;
}

function getRandomMoves() {
  return shuffle(getMoves());
}

function shuffle(array) {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
