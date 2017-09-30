describe("Engine", function () {
    it("temp should return 7", function () {
        var engine = new Engine();
        expect(engine.temp()).toBe(7);
    });
});