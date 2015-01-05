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
