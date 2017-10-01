window.onload = function () {
    var canvas = document.createElement('canvas');
    canvas.width = 505;
    canvas.height = 606;

    document.body.appendChild(canvas);
    var ctx = canvas.getContext('2d');

    var resources = new Resources();
    new Engine(ctx, resources);
};
