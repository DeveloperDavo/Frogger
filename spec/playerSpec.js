describe("Player", function () {

    var player;
    var x;
    var y;

    beforeEach(function () {
        x = 1 * BLOCK_WIDTH;
        y = HEIGHT_WITHIN_BLOCK + 2 * BLOCK_HEIGHT;
        player = new Player(new Position(x, y));
    });

    it("should move left when pressing left", function () {

        player.handleInput('left');

        expect(player.position.x).toBe(x - BLOCK_WIDTH);
        expect(player.position.y).toBe(y);
    });

    it("should move right when pressing right", function () {

        player.handleInput('right');

        expect(player.position.x).toBe(x + BLOCK_WIDTH);
        expect(player.position.y).toBe(y);
    });

    it("should move up when pressing up", function () {
        player.handleInput('up');

        expect(player.position.x).toBe(x);
        expect(player.position.y).toBe(y - BLOCK_HEIGHT);
    });

    it("should move down when pressing down", function () {
        player.handleInput('down');

        expect(player.position.x).toBe(x);
        expect(player.position.y).toBe(y + BLOCK_HEIGHT);
    });

    it("should not move player off left hand side of board", function () {
        while (player.position.x > 0 - BLOCK_WIDTH)
            player.handleInput('left');

        player.update();

        expect(player.position.x).toBe(0);
        expect(player.position.y).toBe(y);
    });

    it("should not move player off right hand side of board", function () {
        while (player.position.x < X_MAX + BLOCK_WIDTH)
            player.handleInput('right');

        player.update();
        expect(player.position.x).toBe(X_MAX);
        expect(player.position.y).toBe(y);
    });
});