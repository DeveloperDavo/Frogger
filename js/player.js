var Player = function (position) {
    this.position = position;
    this.sprite = 'images/char-boy.png';

    this.update = function () {
        this.position = new Position(0, HEIGHT_WITHIN_BLOCK + 2 * BLOCK_HEIGHT);
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

