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

