function addCellHandlers() {
  //Gets all divs that have the 'cell' class, but NOT the 'default' class
  var cells = document.querySelectorAll(".cell:not(.default)");
  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      document.querySelectorAll(".cell.active").forEach((cell) => {
        cell.classList.remove("active");
      });
      cell.classList.add("active");
    });
  });
}

function addInputListener() {
  addEvent(document, "keypress", (e) => {
    //Compares e.key to a regex, ensuring the value is between 1 -> 9 inclusive
    if (/[1-9]/.test(parseInt(e.key))) {
      var cell = document.querySelector(".active");
      makeMove(cell.id, e.key);
    }
  });
}

function makeMove(cellId, value) {
  gameBoard[getColId(cellId)][getRowId(cellId)] = value;
  updateUI(cellId, value);
}

function addEvent(element, eventName, callback) {
  if (element.addEventListener) {
    element.addEventListener(eventName, callback, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventName, callback);
  } else {
    element["on" + eventName] = callback;
  }
}
