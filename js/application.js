$(document).ready(function() {
  newGame = new Game("0224240200448008");
  newGame.updateBoard();
  Mousetrap.bind('left', function(){ newGame.moveLeft(); newGame.spawn(); newGame.updateBoard();});
  Mousetrap.bind('right', function(){newGame.moveRight(); newGame.spawn(); newGame.updateBoard();});
  Mousetrap.bind('up', function(){newGame.moveUp(); newGame.spawn(); newGame.updateBoard();});
  Mousetrap.bind('down', function(){newGame.moveDown(); newGame.spawn(); newGame.updateBoard();});
});


