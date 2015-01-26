var Game = function(startBoard) {
  this.completed = false;
  this.startBoard = startBoard;
  this.board = this.makeBoard(startBoard);
  this.cells = $('.square').toArray();
  this.boardString;
  this.respawnIsOn = true;
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

Game.prototype.logBoard = function(){
  this.board.forEach(function(ele){
    console.log(ele.join(" "));
  });
};

Game.prototype.moveLeft = function(){
  var self = this;
  var board = this.board;
  var old_board = this.board.toString();

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
    var counter = row.length - zeroless.length; //add 0s until row appropriate length
    for (var k = 0; k < counter; k++) {
      zeroless.push(0);
    }
    self.board[i] = zeroless;
  }
  old_board === self.board.toString() ? self.respawnIsOn = false : self.respawnIsOn = true;
};

Game.prototype.moveRight = function(){
  var self = this;
  var board = this.board;
  var old_board = this.board.toString();
  for (var i = 0; i < board.length; i++) {
    var row = board[i];
    var zeroless = row.filter(function(i) { return i !== 0} ); // creates row without 0s
    for (var j = zeroless.length - 1; j >= 0; j--) {
     if (zeroless[j] === zeroless[(j-1)]) {
        zeroless[j] = zeroless[j] * 2;
        zeroless.splice(j-1, 1);
      } else {
        zeroless[j] = zeroless[j]
      } // (no change)
    }
    var counter = row.length - zeroless.length;
    for (var k = 0; k < counter; k++) {
      zeroless.unshift(0);
    }
    self.board[i] = zeroless;
  }
  old_board === self.board.toString() ? self.respawnIsOn = false : self.respawnIsOn = true;
};

Game.prototype.moveUp = function(){
  var old_board = this.board.toString();
  this.board = _.zip.apply(null, this.board);
  this.moveLeft();
  this.board = _.zip.apply(null, this.board);
  old_board === this.board.toString() ? this.respawnIsOn = false : this.respawnIsOn = true;
};

Game.prototype.moveDown = function(){
  var old_board = this.board.toString();
  this.board = _.zip.apply(null, this.board);
  this.moveRight();
  this.board = _.zip.apply(null, this.board);
  old_board === this.board.toString() ? this.respawnIsOn = false : this.respawnIsOn = true;
};

Game.prototype.updateBoard = function() {
  console.log('updating board');
  console.log(this.cells);
  var merged = [];
  merged = merged.concat.apply(merged, this.board);
  for (i in this.cells){
    if (merged[i] !== 0) {
      $(this.cells[i]).html(merged[i]);
      var num = (merged[i]).toString();
      $(this.cells[i]).removeAttr('class').addClass('square').addClass("S"+num);
    } else {
      $(this.cells[i]).html('&nbsp;')
      $(this.cells[i]).removeAttr('class').addClass('square').addClass("0");
    }
  }
};

Game.prototype.


Game.prototype.spawn = function() {
  if (this.respawnIsOn) {
    //spawn code
  }
}




test = new Game("0224240200448008");










