var Player = function (position) {
    this.position = position;
    this.sprite = 'images/char-boy.png';

    this.update = function () {
        var x = this.position.x;
        var y = this.position.y;
        if (x >= X_MAX) {
            x = X_MAX;
        } else if (x <= 0) {
            x = 0;
        }

        if (y > Y_MAX) y = Y_MAX;

        this.position = new Position(x, y);
    };

    this.handleInput = function (direction) {
        if (direction === 'left') {
            this.position.x -= BLOCK_WIDTH;
        } else if (direction === 'right') {
            this.position.x += BLOCK_WIDTH;
        } else if (direction === 'up') {
            this.position.y -= BLOCK_HEIGHT;
        } else if (direction === 'down') {
            this.position.y += BLOCK_HEIGHT;
        }
    }
};

