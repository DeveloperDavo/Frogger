describe("Enemy", function() {
    it("update should increase position x by speed * dt", function() {
        var x = 0, y = 50, speed = 200, dt = 0.01;
        var enemy = new Enemy(x, y, speed);

        enemy.update(dt);

        expect(enemy.x).toBe(2);
        expect(enemy.y).toBe(y);
    });
});