describe("Engine", function () {
    var canvas;
    var resources;
    var engine;

    beforeEach(function () {
        canvas = document.createElement('canvas');
        canvas.width = 505;
        canvas.height = 606;

        document.body.appendChild(canvas);
        var ctx = canvas.getContext('2d');
        spyOn(ctx, 'drawImage');

        resources = new Resources();
        engine = new Engine(ctx, resources, document);
    });

    afterEach(function () {
        document.body.removeChild(canvas);
    });

    it("init should call render in Enemy", function () {
        var enemy = new Enemy();
        engine.setEnemy(enemy);

        spyOn(enemy, 'render');
        engine.init();

        expect(enemy.render).toHaveBeenCalled();
    });
});