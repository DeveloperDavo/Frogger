describe("Player", function() {
    it("should move left when pressing left", function() {
        var x = 202, y = 300, direction = 'left';
        var player = new Player(x, y);

        player.handleInput(direction);

        expect(player.x).toBe(101);
    });

    it("should move right when pressing right", function() {
        var x = 202, y = 300, direction = 'right';
        var player = new Player(x, y);

        player.handleInput(direction);

        expect(player.x).toBe(303);
    });

    it("should move up when pressing up", function () {
        var x = 202, y = 300, direction = 'up';
        var player = new Player(x, y);

        player.handleInput(direction);

        expect(player.x).toBe(202);
        expect(player.y).toBe(300 - 87);
    });
});