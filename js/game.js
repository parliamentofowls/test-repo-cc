var Game = function(startBoard) {
  this.completed = false;
  this.startBoard = startBoard;
  this.board = this.makeBoard(startBoard);
};

Game.prototype.makeBoard = function(stringBoard){
  if (stringBoard.length !== 16){
    alert("Starting boards must be 16 digits long, you silly hobbit!");
    return false
  } else {
    var board = [];
    for (var i = 0; i < stringBoard.length; i+=4) {
      var array = [];
      for (var j = i; j < i+4; j++) {
      array.push(parseInt(stringBoard[j]));
      }
    board.push(array);
    }
  }
  return board;
};

Game.prototype.toString = function(){
  // var boardString = this.board.toString().replace(/,/g, "");
  var boardString = this.board;
  for (var i = 0; i < boardString.length; i++) {
    boardString[i].push("\n");
  };
  console.log(boardString.join("").replace(/,/g, ""));
};

Game.prototype.moveLeft = function(){
  var self = this;
  var board = this.board;
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    var zeroless = row.filter(function(i) { return i !== 0}) // creates row without 0s

    for (var j = 0; j < zeroless.length; j++) {
      if (zeroless[j] === zeroless[j+1]) {
        zeroless[j] = zeroless[j] * 2;
        zeroless.splice(j+1, 1);
      } else {
        zeroless[j] = zeroless[j]
      } // (no change)
    }
    var counter = row.length - zeroless.length;
    for (var k = 0; k < counter; k++) {
      zeroless.push(0);
    }
    self.board[i] = zeroless;
  }
};

Game.prototype.move = function('right'){

}

Game.prototype.move = function('up'){

}

Game.prototype.move = function('down'){

}


