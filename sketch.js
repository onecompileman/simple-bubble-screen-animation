var bubbles = [];

function setup() {
    createCanvas(windowWidth, windowHeight);  
}

function draw() {
    background(0);
    bubbles.forEach((bubble) => {
        bubble.update();
        bubble.show();
    });
}

function mousePressed() {
    const pos = createVector(mouseX, mouseY) // x, y    
    const vel = createVector(random(-4,4),
                             random(-4,4));
    const col = (color(
        random(0,255), // min, max
        random(0,255),
        random(0,255)
    ));
    const radius = random(50,150);

    bubbles.push(
        new Bubble(pos,vel,col,radius)
    );
}

var Bubble = (function () {

    function Bubble(pos, vel, col, radius) {
        this.pos = pos;
        this.vel = vel;
        this.col = col;
        this.radius = radius;
    }

    Bubble.prototype.show = function () {
        noStroke();
        fill(this.col);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);
    }

    Bubble.prototype.update = function () {
        this.pos.add(this.vel);
        this.edges();
    }

    Bubble.prototype.edges = function () {
        if (this.pos.x - (this.radius / 2) < 0 || this.pos.x + (this.radius / 2) > width) {
            this.vel.x *= -1;
        }

        if (this.pos.y - (this.radius / 2) < 0 || this.pos.y + (this.radius / 2) > height) {
            this.vel.y *= -1;
        }
    }

    return Bubble;
    
})();