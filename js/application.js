$(document).ready(function() {
  $('.new_game_button').on('click', function(){
    newGame = new Game();
    newGame.updateBoard();
  })

  // var ways = ['left', 'right', 'up', 'down'];
  // for (var i=0; i< ways.length; i++) {
  //   Mousetrap.bind(ways[i], function(){ newGame.loop(ways[i]); })
  // };
//     Mousetrap.bind('left', function(){ newGame.loop('left')});
//     Mousetrap.bind('right', function(){newGame.loop('right')});
//     Mousetrap.bind('up', function(){newGame.loop('up')});
//     Mousetrap.bind('down', function(){newGame.loop('down')});
// });
  Mousetrap.bind('left', function(){ newGame.moveLeft(); newGame.spawn(); newGame.updateBoard();});
  Mousetrap.bind('right', function(){newGame.moveRight(); newGame.spawn(); newGame.updateBoard();});
  Mousetrap.bind('up', function(){newGame.moveUp(); newGame.spawn(); newGame.updateBoard();});
  Mousetrap.bind('down', function(){newGame.moveDown(); newGame.spawn(); newGame.updateBoard();});
});
