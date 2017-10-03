var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';

    this.update = function () {
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

