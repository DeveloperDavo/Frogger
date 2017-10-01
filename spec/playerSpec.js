describe("Player", function() {
    it("should move left when pressing left", function() {
        var x = 200, y = 300, direction = 'left';
        var player = new Player(x, y);

        player.handleInput(direction);

        expect(player.x).toBe(100);
    });
});