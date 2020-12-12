class Pig {
    constructor(x, y) {
        var options = {
            restitution : 0.8
        }
        this.body = Bodies.circle(x, y, 35, options);
        World.add(wo, this.body);
    }

    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 35);
    }
}