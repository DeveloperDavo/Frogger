var Enemy = function() {
    this.sprite = 'images/enemy-bug.png';
};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


