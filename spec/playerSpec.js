describe("Player", function () {

    var player;

    beforeEach(function() {
        player = new Player(new Position(200, 300));
    });

    it("should move left when pressing left", function () {

        player.handleInput('left');

        expect(player.position.x).toBe(200 - BLOCK_WIDTH);
        expect(player.position.y).toBe(300);
    });

    it("should move right when pressing right", function () {

        player.handleInput('right');

        expect(player.position.x).toBe(200 + BLOCK_WIDTH);
        expect(player.position.y).toBe(300);
    });

    it("should move up when pressing up", function () {
        player.handleInput('up');

        expect(player.position.x).toBe(200);
        expect(player.position.y).toBe(300 - BLOCK_HEIGHT);
    });

    it("should move down when pressing down", function () {
        player.handleInput('down');

        expect(player.position.x).toBe(200);
        expect(player.position.y).toBe(300 + BLOCK_HEIGHT);
    });
});