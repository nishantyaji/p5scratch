let elem; // Declare object
let circle_list = [];

function setup() {
	createCanvas(710, 400);
	// Create object
	elem = new CircleVar();
	circle_list.push(elem)
}

function draw() {
	background(50, 89, 100);
	for (let c1 of circle_list) {
		c1.grow();
		c1.display();
		if (c1.grow_flag) {
			if (c1.touches_boundary())
				c1.grow_flag = false;
			for (let c2 of circle_list) {
				if (c1 != c2) {
					if (c1.intersects(c2)) {
						c1.grow_flag = false;
						c2.grow_flag = false
					}
				}
			}
		}
	}
	elem_new = new CircleVar();
	in_flag = true;
	for (let c1 of circle_list) {
		if (c1.is_point_interior(elem_new.x, elem_new.y)) {
			in_flag = false;
			break;
		}
	}
	if (in_flag) {
		circle_list.push(elem_new);
	}
}

// Growable circle class
class CircleVar {
	constructor() {
		this.x = random(width);
		this.y = random(height);
		this.diameter = 1;
		this.gradient = 1;
		this.grow_flag = true
	}

	grow() {
		if (this.grow_flag) {
			this.diameter += this.gradient
		}
	}

	intersects(other) {
		return dist(this.x, this.y, other.x, other.y) <= 
			(this.diameter + other.diameter) / 2;
	}

	touches_boundary() {
		return this.x == 0 || this.x == width - 1 || this.y == 0 || this.y == height - 1
	}

	is_point_interior(x, y) {
		return dist(this.x, this.y, x, y) <= this.diameter / 2;
	}

	display() {
		ellipse(this.x, this.y, this.diameter, this.diameter);
	}
}