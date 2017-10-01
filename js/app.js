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

var Player = function () {
    this.update = function () {
    };
    this.render = function () {
    };
    this.handleInput = function () {
    }
};

var allEnemies = [new Enemy(0, 50, 200)];
var player = new Player();

document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});