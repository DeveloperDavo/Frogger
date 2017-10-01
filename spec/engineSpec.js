xdescribe("Engine", function () {
    it("should call render from Enemy", function () {
        var engine = new Engine();
        engine.init();
        expect(enemy.render()).toHaveBeenCalled();
    });
});