var BLOCK_WIDTH = 101;
var BLOCK_HEIGHT = 87;
var HEIGHT_WITHIN_BLOCK = 60;

var Enemy = function (x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.update = function (timeDifferenceBetweenTicks) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += timeDifferenceBetweenTicks * this.speed;
};

Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';

    this.update = function () {
    };

    this.render = function () {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    this.handleInput = function (direction) {
        if (direction === 'left') {
            this.x -= BLOCK_WIDTH;
        } else if (direction === 'right') {
            this.x += BLOCK_WIDTH;
        } else if (direction === 'up') {
            this.y -= BLOCK_HEIGHT;
        } else if (direction === 'down') {
            this.y += BLOCK_HEIGHT;
        }
    }
};

var allEnemies = [new Enemy(0, HEIGHT_WITHIN_BLOCK, 200)];
var player = new Player(2 * BLOCK_WIDTH, HEIGHT_WITHIN_BLOCK + 4 * BLOCK_HEIGHT);

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});