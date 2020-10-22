
let flaskElements = [box01,box02,box03,box04,box05,box06,box07,box08,box09,box10,circle01,circle02,circle03,circle04,arc01,arc02];
let flaskArray = [];

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  // console.log(flaskElements);
  for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i] = new MovedFlask (flaskElements[i]);
  }
}

function draw() {
    background (220);
    push();
    translate(0, 0);
    

  for (let i = 0; i < flaskElements.length; i++) {
    flaskArray[i].moveBox();
    flaskArray[i].trackingLines();
    flaskArray[i].drawCircle();
    flaskArray[i].drawArc();
  }
  pop();
}
