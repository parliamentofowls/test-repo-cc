var Game = function(startBoard) {
  this.completed = false;
  this.startBoard = startBoard;
  this.board = this.makeBoard(startBoard);
  this.cells = $('.square').toArray();
  this.respawnIsOn = true;
};


// Game.prototype.loop = function() {

// };

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

Game.prototype.toBoardString = function(nestedArray){
  str = ""
  for (var i = 0; i < nestedArray.length; i++) {
    for (var j = 0; j < i.length; j++) {
      str += i[j]
    }
  }
  return str;
}

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

Game.prototype.spawn = function() {
  var self = this;

  if (this.respawnIsOn) {
    var newCell = Math.floor(Math.random()*9+1) > 2 ? "2" : "4";
    var temp = self.toBoardString(self.board).replace("0", newCell);
    self.board = self.makeBoard(temp);
  }
};

Game.prototype.updateBoard = function() {
  var self = this;
  console.log('updating board');
  console.log(this.cells);
  var merged = [];
  merged = merged.concat.apply(merged, self.board);
  for (i in self.cells){
    if (merged[i] !== 0) {
      $(self.cells[i]).html(merged[i]);
      var num = (merged[i]).toString();
      $(self.cells[i]).removeAttr('class').addClass('square').addClass("S"+num);
    } else {
      $(self.cells[i]).html('&nbsp;')
      $(self.cells[i]).removeAttr('class').addClass('square').addClass("0");
    }
  }
};





// test = new Game("0224240200448008");










