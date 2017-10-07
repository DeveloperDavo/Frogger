var Player = function (position) {
    this.position = position;
    this.sprite = 'images/char-boy.png';

    var getUpdatedY = function () {
        var y = this.position.y;
        if (y > Y_MAX) {
            y = Y_MAX;
        } else if (y <= Y_WIN) {
            y = Y_START;
        }
        return y;
    };

    var getUpdatedX = function () {
        var x = this.position.x;
        if (x >= X_MAX) {
            x = X_MAX;
        } else if (x <= 0) {
            x = 0;
        }
        return x;
    };

    this.update = function () {
        this.position = new Position(getUpdatedX.call(this), getUpdatedY.call(this));
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

