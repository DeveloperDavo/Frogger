describe("Enemy", function() {
    it("update should increase position x by 200 * dt", function() {
        var x = 0, y = 50, dt = 0.01;
        var enemy = new Enemy(x, y);

        enemy.update(dt);

        expect(enemy.x).toBe(2);
        expect(enemy.y).toBe(y);
    });
});