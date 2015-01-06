$(document).ready(function() {
  newGame = new Game("0224240200448008");
  newGame.updateBoard();
  Mousetrap.bind('left', function(){newGame.moveLeft(); newGame.updateBoard();});
  Mousetrap.bind('right', function(){newGame.moveRight(); newGame.updateBoard();});
  Mousetrap.bind('up', function(){newGame.moveUp(); newGame.updateBoard();});
  Mousetrap.bind('down', function(){newGame.moveDown(); newGame.updateBoard();});
});

