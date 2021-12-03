function setup() {
  createCanvas(710, 400, WEBGL);
  wordObject = createWord3D("HELLO", 10, 10, 10);
}

function draw() {
  wordObject.show();
}