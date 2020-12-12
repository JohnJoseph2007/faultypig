class Log {
    constructor(x, y, height, ang) {
        var options = {
            restitution : 0.8
        }
        this.body = Bodies.rectangle(x, y, 20, height, options);
        World.add(wo, this.body);
        this.h = height;
        Matter.Body.setAngle(this.body, ang);
    }
    display() {
        var pos = this.body.position;
        var bodyAngle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(bodyAngle);
        rectMode(CENTER);
        fill("brown");
        rect(0, 0, 20, this.h);
    }
}