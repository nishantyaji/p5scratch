let current=[];
let prev=[];
let damping = 0.9;

function setup() {
  createCanvas(400, 400);
  init();
}

function init() {
  current = new Array(width * height);
  for(let i = 0; i < height; i++)
  {
    current[i] = [];
    for(let j = 0; j < width; j++)
    {
      current[i][j]=255;
    }
  }
  prev = new Array(width * height);
  for(let i = 0; i < height; i++)
  {
    prev[i] = [];
    for(let j = 0; j < width; j++)
    {
      prev[i][j]=255;
    }
  }
}

function mousePressed() {
  index = (mouseY -1) * (width - 1) + mouseX;
  current[index] = 255;
  prev[index] = 255;
}

function draw() {
  stroke(2);
  background(0);
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      current[i][j] = (prev[i-1][j]+prev[i+1][j]+prev[i][j-1]+prev[i][j+1])/2 - current[i][j];
    }
  }
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      fill(current[i][j]);
      point(i, j);
    }
  }
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
			current[i][j] = current[i][j]*damping;      
    }
  }
}