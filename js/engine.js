/* Engine.js
 * This file provides the game loop functionality (update entities and render),
 * draws the initial game board on the screen, and then calls the update and
 * render methods on your player and enemy objects (defined in your app.js).
 *
 * A game engine works by drawing the entire game screen over and over, kind of
 * like a flipbook you may have created as a kid. When your player moves across
 * the screen, it may look like just that image/character is moving or being
 * drawn but that is not the case. What's really happening is the entire "scene"
 * is being drawn over and over, presenting the illusion of animation.
 *
 * This engine makes the canvas' context (ctx) object globally available to make 
 * writing app.js a little simpler to work with.
 */
var Engine = function (ctx, resources) {
    var IMAGE_RELATIVE_URLS = [
        'images/water-block.png',
        'images/stone-block.png',
        'images/stone-block.png',
        'images/stone-block.png',
        'images/grass-block.png',
        'images/grass-block.png'
    ];
    var NUM_ROWS = 6, NUM_COLS = 5;

    var main = function () {
        render();
        window.requestAnimationFrame(main);
    };

    this.init = function () {
        main();
    };

    function render() {
        renderGrid();
    }

    function renderGrid() {
        var row, col;

        for (row = 0; row < NUM_ROWS; row++) {
            for (col = 0; col < NUM_COLS; col++) {
                /* The drawImage function of the canvas' context element
                     * requires 3 parameters: the image to draw, the x coordinate
                     * to start drawing and the y coordinate to start drawing.
                     * We're using our Resources helpers to refer to our images
                     * so that we get the benefits of caching these images, since
                     * we're using them over and over.
                     */
                ctx.drawImage(resources.get(IMAGE_RELATIVE_URLS[row]), col * 101, row * 83);
            }
        }
    }

    resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/enemy-bug.png',
        'images/char-boy.png'
    ]);

    resources.onReady(this.init);

};
