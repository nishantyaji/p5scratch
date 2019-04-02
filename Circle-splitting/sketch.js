let center
let diameter = 100;
let circle_list = [];
var input;
let loop_count = 0;



function setup() {
  createCanvas(400, 400);

  input = createInput(7);
  input.position(0, 0);
  input.size(20);
  input.changed(initAll);
  initAll();


  angleMode(DEGREES);
  center = new CircleSplit(width / 2, height / 2, diameter);


}

function initAll() {
  loop_count = 0;
  circle_list = [];
  in_val = parseInt(input.value());
  print(in_val);
  for (let i = 0; i <= in_val - 1; i++) {
    new_diameter = diameter / sqrt(in_val);
    let elem = new CircleSplit(width / 2, height / 2, new_diameter);
    elem.move_angle = i * 360 / in_val;
    circle_list.push(elem);
  }
}

function draw() {
  background(101);
  print(loop_count);
  if (loop_count < width / 3) {
    loop_count++;
    if (loop_count < diameter / 50) {
      center.display()
    }
    if (circle_list.length > 0)
      for (let c of circle_list) {
        c.move(loop_count);
      }
  }
  for (let c of circle_list) {
    c.display();
  }
}

class CircleSplit {
  constructor(x, y, diameter) {
    this.orig_x = x;
    this.orig_y = y;
    this.x = x;
    this.y = y;
    this.diameter = diameter;
    this.move_angle = 0;
  }

  move(away_dist) {
    this.x = this.orig_x + away_dist * cos(this.move_angle);
    this.y = this.orig_y + away_dist * sin(this.move_angle);
  }

  display() {
    fill(0, 0, 0);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}