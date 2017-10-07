var BLOCK_WIDTH = 101;
var BLOCK_HEIGHT = 83;
var HEIGHT_WITHIN_BLOCK = 60;
var NUM_ROWS = 6;
var NUM_COLS = 5;
var X_MAX = BLOCK_WIDTH * (NUM_COLS - 1);

var App = function (global) {
    var resources = new Resources();
    var allEnemies = [new Enemy(0, HEIGHT_WITHIN_BLOCK, 200)];
    var player = new Player(new Position(2 * BLOCK_WIDTH, HEIGHT_WITHIN_BLOCK + 4 * BLOCK_HEIGHT));

    new Engine(global, resources, allEnemies, player);

    document.addEventListener('keyup', function (e) {
        var allowedKeys = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down'
        };

        player.handleInput(allowedKeys[e.keyCode]);
    });
};

