// function makeNextMove(board) {
//   printBoard(board);
//   for (var i = 0; i < 9; i++) {
//     for (var j = 0; j < 9; j++) {
//       //Checks if current space is not yet filled
//       if (board[i][j] == 0) {
//         var moves = getPossibleMoves(board, i, j);
//         if (moves.length == 0) {
//           return;
//         }
//         for (var k = 0; k < moves.length; k++) {
//           board[i][j] = moves[k];
//           // makeNextMove(JSON.parse(JSON.stringify(board)));
//           makeNextMove(board);
//           board[i][j] = 0;
//         }
//       }
//     }
//   }
//   return board;
// }

// function makeNextMove(board) {
//   var nextCell = getNextAvailableCell(board);
//   if (nextCell == -1) {
//     return board;
//   } else {
//     var moves = getPossibleMoves(board, nextCell);
//     console.log(moves);
//     for (var i = 0; i < moves.length; i++) {
//       board[nextCell[1]][nextCell[0]] = moves[i];
//       console.log(printBoard(board));
//       board = makeNextMove(board);
//     }
//   }
//   return board;
// }

// function getNextAvailableCell(board) {
//   for (var i = 0; i < 9; i++) {
//     for (var j = 0; j < 9; j++) {
//       if (board[i][j] == 0) {
//         return [i, j];
//       }
//     }
//   }
//   return -1;
// }

// function isPossible(board, y, x, n) {
//   for (var i = 0; i < 9; i++) {
//     if (board[y][i] == n) return false;
//   }

//   for (var i = 0; i < 9; i++) {
//     if (board[i][x] == n) return false;
//   }

//   var x0 = Math.floor(x / 3) * 3;
//   var y0 = Math.floor(y / 3) * 3;
//   for (var i = 0; i < 3; i++) {
//     for (var j = 0; j < 3; j++) {
//       if (board[y0 + i][x0 + j] == n) return false;
//     }
//   }

//   return true;
// }

//DEBUG

//Highlights all cells in the same row and col
// function showActive(cellId) {
//   var rowIds = getRowIds(cellId);
//   var colIds = getColIds(cellId);
//   var secIds = getSectionIds(cellId);
//   rowIds.forEach(function (cell) {
//     var temp = document.getElementById(cell);
//     temp.classList.add("active");
//   });

//   colIds.forEach(function (cell) {
//     var temp = document.getElementById(cell);
//     temp.classList.add("active");
//   });

//   secIds.forEach(function (cell) {
//     var temp = document.getElementById(cell);
//     temp.classList.add("active");
//   });

//   setTimeout(function () {
//     rowIds.forEach(function (cell) {
//       var temp = document.getElementById(cell);
//       temp.classList.remove("active");

//       colIds.forEach(function (cell) {
//         var temp = document.getElementById(cell);
//         temp.classList.remove("active");

//         secIds.forEach(function (cell) {
//           var temp = document.getElementById(cell);
//           temp.classList.remove("active");
//         });
//       });
//     });
//   }, 3000);
// }

// function getAvailableMoves(cellId) {
//   var values = [];
//   var rowValues = getValuesFromCells(getRowIds(cellId));
//   var colValues = getValuesFromCells(getColIds(cellId));
//   var secValues = getValuesFromCells(getSectionIds(cellId));
//   rowValues.forEach(function (curr) {
//     values.push(curr);
//   });
//   colValues.forEach(function (curr) {
//     values.push(curr);
//   });
//   secValues.forEach(function (curr) {
//     values.push(curr);
//   });

//   values.filter(getDistinct);
//   var nums = getNums();
//   var moves = nums.filter((x) => !values.includes(x));
//   return moves;
// }

// function makeNextMove() {
// getMoves(gameBoard);
// var nextCell = getNextCell(gameBoard);
// printBoard(gameBoard);
// if (nextCell == -1) {
//   alert("No available cell to place a move!");
//   return;
// }

// var availableMoves = getAvailableMoves(getIdFromIndexes(nextCell));
// if (availableMoves.length == 0) {
//   alert("No valid moves left.");
//   return;
// }
// gameBoard[nextCell[0]][nextCell[1]] = availableMoves[0];
// updateUI(getIdFromIndexes(nextCell), availableMoves[0]);
// }

// function getNextCell(board) {
//   for (var i = 0; i < 9; i++) {
//     for (var j = 0; j < 9; j++) {
//       if (board[j][i] == 0) {
//         return [j, i];
//       }
//     }
//   }
//   return -1;
// }

//Returns the sum of all values in the section that cellId is in
// function sumSection(cellId) {
//   var sectionNums = getValuesFromCells(getSectionIds(cellId));
//   var nums = getNums();
//   var duplicates = [];
//   for (var i = 0; i < nums; i++) {
//     var count = 0;
//     for (var j = 0; j < sectionsNums; j++) {
//       if (nums[i] == sectionNums[j]) count++;
//     }
//     if (count > 1) {
//       duplicates.push(nums[i]);
//     }
//   }
// }

// //Applies the active class to the current cell.
// //Removes the active class from any other cell.
// function showActive(cellId) {
//   document.querySelectorAll("div.active").forEach(function (cell) {
//     cell.classList.remove("active");
//   });
//   document.getElementById(cellId).classList.add("active");
// }
// //==============================================================
// //      ROW FUNCTIONS
// //==============================================================

// //Gets the Id of the Row that CellId is in

// //Given a CellId, this function returns the Ids of all
// //cells in the same row
// function getRowIds(cellId) {
//   //First row
//   if (cellId >= 0 && cellId <= 8) {
//     return [0, 1, 2, 3, 4, 5, 6, 7, 8];
//   }

//   //Second row
//   else if (cellId >= 9 && cellId <= 17) {
//     return [9, 10, 11, 12, 13, 14, 15, 16, 17];
//   }

//   //Third row
//   else if (cellId >= 18 && cellId <= 26) {
//     return [18, 19, 20, 21, 22, 23, 24, 25, 26];
//   }

//   //Fourth row
//   else if (cellId >= 27 && cellId <= 35) {
//     return [27, 28, 29, 30, 31, 32, 33, 34, 35];
//   }

//   //Fifth row
//   else if (cellId >= 36 && cellId <= 44) {
//     return [36, 37, 38, 39, 40, 41, 42, 43, 44];
//   }

//   //Sixth row
//   else if (cellId >= 45 && cellId <= 53) {
//     return [45, 46, 47, 48, 49, 50, 51, 52, 53];
//   }

//   //Seventh row
//   else if (cellId >= 54 && cellId <= 62) {
//     return [54, 55, 56, 57, 58, 59, 60, 61, 62];
//   }

//   //Eighth row
//   else if (cellId >= 63 && cellId <= 71) {
//     return [63, 64, 65, 66, 67, 68, 69, 70, 71];
//   }

//   //Ninth row
//   else {
//     return [72, 73, 74, 75, 76, 77, 78, 79, 80];
//   }
// }

// //==============================================================
// //      COLUMN FUNCTIONS
// //==============================================================

// //Given a CellId, this function returns the Ids of all
// //cells in the same column
// function getColIds(cellId) {
//   var Ids = [];
//   while (cellId > 8) cellId = cellId - 9;

//   Ids.push(cellId);
//   while (cellId < 72) {
//     cellId = cellId + 9;
//     Ids.push(cellId);
//   }
//   return Ids;
// }

// //==============================================================
// //      SECTION FUNCTIONS
// //==============================================================

// //Gets the Id of the section that cellId is in
// function getSectionId(cellId) {
//   var rowId = getRowId(cellId);
//   var colId = getColId(cellId);

//   //First row of sections
//   if (rowId >= 0 && rowId <= 2) {
//     //First col of section
//     if (colId >= 0 && colId <= 2) {
//       return "s0";
//     }

//     //Second col of sections
//     else if (colId >= 3 && colId <= 5) {
//       return "s1";
//     }

//     //Third col of Sections
//     else if (colId >= 6 && colId <= 8) {
//       return "s2";
//     }
//   }

//   //Second row
//   else if (rowId >= 3 && rowId <= 5) {
//     //First col of section
//     if (colId >= 0 && colId <= 2) {
//       return "s3";
//     }

//     //Second col of sections
//     else if (colId >= 3 && colId <= 5) {
//       return "s4";
//     }

//     //Third col of Sections
//     else if (colId >= 6 && colId <= 8) {
//       return "s5";
//     }
//   } else if (rowId >= 6 && rowId <= 8) {
//     //First col of section
//     if (colId >= 0 && colId <= 2) {
//       return "s6";
//     }

//     //Second col of sections
//     else if (colId >= 3 && colId <= 5) {
//       return "s7";
//     }

//     //Third col of Sections
//     else if (colId >= 6 && colId <= 8) {
//       return "s8";
//     }
//   }
// }

// //Returns the Ids of all cells that are in
// //the section in which cellId is in
// function getSectionIds(cellId) {
//   var rowId = getRowId(cellId);
//   var colId = getColId(cellId);

//   //First row of sections
//   if (rowId >= 0 && rowId <= 2) {
//     //First col of section
//     if (colId >= 0 && colId <= 2) {
//       return [0, 1, 2, 9, 10, 11, 18, 19, 20];
//     }

//     //Second col of sections
//     else if (colId >= 3 && colId <= 5) {
//       return [3, 4, 5, 12, 13, 14, 21, 22, 23];
//     }

//     //Third col of Sections
//     else if (colId >= 6 && colId <= 8) {
//       return [6, 7, 8, 15, 16, 17, 24, 25, 26];
//     }
//   }

//   //Second row
//   else if (rowId >= 3 && rowId <= 5) {
//     //First col of section
//     if (colId >= 0 && colId <= 2) {
//       return [27, 28, 29, 36, 37, 38, 45, 46, 47];
//     }

//     //Second col of sections
//     else if (colId >= 3 && colId <= 5) {
//       return [30, 31, 32, 39, 40, 41, 48, 49, 50];
//     }

//     //Third col of Sections
//     else if (colId >= 6 && colId <= 8) {
//       return [33, 34, 35, 42, 43, 44, 51, 52, 53];
//     }
//   } else if (rowId >= 6 && rowId <= 8) {
//     //First col of section
//     if (colId >= 0 && colId <= 2) {
//       return [54, 55, 56, 63, 64, 65, 72, 73, 74];
//     }

//     //Second col of sections
//     else if (colId >= 3 && colId <= 5) {
//       return [57, 58, 59, 66, 67, 68, 75, 76, 77];
//     }

//     //Third col of Sections
//     else if (colId >= 6 && colId <= 8) {
//       return [60, 61, 62, 69, 70, 71, 78, 79, 80];
//     }
//   }
// }

//Function that adds the cellId as content to the cell
// function addIds() {
//   var cells = document.querySelectorAll("div.cell");
//   for (var i = 0; i < cells.length; i++) {
//     cells[i].innerHTML = cells[i].id;
//   }
// }

// //Adds Ids only to the first 8 cells
// function addIds2() {
//   for (var i = 0; i < 8; i++) {
//     document.getElementById(i).innerHTML = i + 1;
//   }
// }

// function getRowValues(board, row) {
//   var values = [];
//   for (var i = 0; i < 9; i++) {
//     if (board[row][i] !== 0) values.push(board[row][i]);
//   }
//   return values;
// }

// function getColValues(board, col) {
//   var values = [];
//   for (var i = 0; i < 9; i++) {
//     if (board[i][col] !== 0) values.push(board[i][col]);
//   }
//   return values;
// }

// function getPossibleMoves(board, y, x) {
//   var values = [];
//   getRowValues(board, y).forEach(function (curr) {
//     values.push(curr);
//   });
//   getColValues(board, x).forEach(function (curr) {
//     values.push(curr);
//   });
//   getSectionValues(board, y, x).forEach(function (curr) {
//     values.push(curr);
//   });

//   var nums = getNums();
//   var moves = nums.filter((n) => !values.includes(n));
//   return moves;
// }

// function getSectionValues(board, j, i) {
//   var x = j;
//   var y = i;

//   //Determining which section we're in
//   if (x >= 0 && x <= 2) {
//     if (y >= 0 && y <= 2) {
//       return [
//         board[0][0],
//         board[0][1],
//         board[0][2],
//         board[1][0],
//         board[1][1],
//         board[1][2],
//         board[2][0],
//         board[2][1],
//         board[2][2],
//       ];
//     } else if (y >= 3 && y <= 5) {
//       return [
//         board[0][3],
//         board[0][4],
//         board[0][5],
//         board[1][3],
//         board[1][4],
//         board[1][5],
//         board[2][3],
//         board[2][4],
//         board[2][5],
//       ];
//     } else {
//       return [
//         board[0][6],
//         board[0][7],
//         board[0][8],
//         board[1][6],
//         board[1][7],
//         board[1][8],
//         board[2][6],
//         board[2][7],
//         board[2][8],
//       ];
//     }
//   } else if (x >= 3 && x <= 5) {
//     if (y >= 0 && y <= 2) {
//       return [
//         board[3][0],
//         board[3][1],
//         board[3][2],
//         board[4][0],
//         board[4][1],
//         board[4][2],
//         board[5][0],
//         board[5][1],
//         board[5][2],
//       ];
//     } else if (y >= 3 && y <= 5) {
//       return [
//         board[3][3],
//         board[3][4],
//         board[3][5],
//         board[4][3],
//         board[4][4],
//         board[4][5],
//         board[5][3],
//         board[5][4],
//         board[5][5],
//       ];
//     } else {
//       return [
//         board[3][6],
//         board[3][7],
//         board[3][8],
//         board[4][6],
//         board[4][7],
//         board[4][8],
//         board[5][6],
//         board[5][7],
//         board[5][8],
//       ];
//     }
//   } else {
//     if (y >= 0 && y <= 2) {
//       return [
//         board[0][0],
//         board[0][1],
//         board[0][2],
//         board[1][0],
//         board[1][1],
//         board[1][2],
//         board[2][0],
//         board[2][1],
//         board[2][2],
//       ];
//     } else if (y >= 3 && y <= 5) {
//       return [
//         board[0][3],
//         board[0][4],
//         board[0][5],
//         board[1][3],
//         board[1][4],
//         board[1][5],
//         board[2][3],
//         board[2][4],
//         board[2][5],
//       ];
//     } else {
//       return [
//         board[0][6],
//         board[0][7],
//         board[0][8],
//         board[1][6],
//         board[1][7],
//         board[1][8],
//         board[2][6],
//         board[2][7],
//         board[2][8],
//       ];
//     }
//   }
// }
// Returns a pre-initialised board used for debugging
// function debug() {
// EASY GAME
// return [
//   [8, 0, 0, 1, 0, 7, 4, 6, 9],
//   [0, 0, 5, 3, 0, 6, 0, 8, 0],
//   [0, 0, 0, 0, 0, 4, 0, 3, 5],
//   [9, 8, 0, 0, 7, 0, 0, 1, 0],
//   [2, 5, 7, 8, 3, 0, 0, 9, 0],
//   [0, 1, 0, 0, 0, 0, 8, 7, 2],
//   [0, 0, 8, 0, 0, 0, 9, 0, 0],
//   [4, 2, 0, 7, 0, 3, 1, 0, 0],
//   [0, 6, 1, 9, 0, 0, 3, 0, 0],
// ];

//SUPES DIFFICULT GAME
//   return [
//     [0, 9, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 1, 9, 0, 3, 0, 7],
//     [0, 0, 0, 8, 0, 0, 0, 0, 0],
//     [0, 0, 5, 0, 7, 0, 0, 0, 9],
//     [0, 0, 0, 4, 0, 0, 0, 8, 1],
//     [0, 2, 0, 0, 0, 0, 0, 7, 0],
//     [0, 7, 0, 0, 0, 4, 0, 0, 0],
//     [0, 0, 0, 2, 5, 0, 0, 4, 0],
//     [5, 0, 9, 0, 0, 3, 0, 2, 0],
//   ];
// }
//Adds various eventHandlers to elements on the page.
// function addEventHandlers() {
//   var cells = document.querySelectorAll("div.cell");
//   var inputBox = document.getElementById("valueInput");
//   inputBox.addEventListener("keyup", function (event) {
//     if (event.key === "Enter") {
//       submitValue();
//     }
//   });
//   for (var i = 0; i < cells.length; i++) {
//     //Toggles the active cell
//     cells[i].addEventListener(
//       "click",
//       function () {
//         showActive(parseInt(this.id));
//       },
//       false
//     );

//     //Removing values on rightclick
//     cells[i].addEventListener(
//       "contextmenu",
//       function (ev) {
//         ev.preventDefault();
//         removeValue(parseInt(this.id));
//       },
//       false
//     );
//   }
// }

// function getFilledCells() {
//   var cells = document.querySelectorAll("div.cell");
//   var result = [];
//   for (var i = 0; i < cells.length; i++) {
//     if (cells[i].innerHTML.trim().length > 0) result.push(cells[i]);
//   }
//   return result;
// }
