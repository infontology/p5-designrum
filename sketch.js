var rSlider, gSlider, bSlider;
var fixed = {x: 400, y:100}; //En fast punkt
var huvud = {min: 30, max: 150};
var kropp = {min: 30, max: 200};
var lem = {min: 30, max: 100};

var hals = 0.2;
var arm_ratio = 0.8;

function setup() {
  // create canvas
  createCanvas(710, 400);
  textSize(15);
  noStroke();

  // create sliders
  hSlider = createSlider(huvud.min, huvud.max, Math.random()*(huvud.max-huvud.min)+huvud.min);
  hSlider.position(20, 20);
  lSlider = createSlider(lem.min, lem.max, Math.random()*(lem.max-lem.min)+lem.min);
  lSlider.position(20, 50);
  kSlider = createSlider(kropp.min, kropp.max, Math.random()*(kropp.max-kropp.min)+kropp.min);
  kSlider.position(20, 80);
}

function draw() {
  var huvud = hSlider.value();
  var lemmar = lSlider.value();
  var kropp = kSlider.value();
  background(210, 200, 240);
  ellipse(400, fixed.y-huvud/2, huvud*.8, huvud); //Huvudet
  stroke(128);
  line(fixed.x, fixed.y, fixed.x, fixed.y+kropp);
  line(fixed.x, fixed.y+kropp, fixed.x+lemmar, fixed.y+kropp+lemmar);
  line(fixed.x, fixed.y+kropp, fixed.x-lemmar, fixed.y+kropp+lemmar);
  line(fixed.x, fixed.y, fixed.x, fixed.y+kropp);
  line(fixed.x, fixed.y+kropp*hals, fixed.x+lemmar*arm_ratio, fixed.y+lemmar*arm_ratio);
  line(fixed.x, fixed.y+kropp*hals, fixed.x-lemmar*arm_ratio, fixed.y+lemmar*arm_ratio);
  text("huvud " + hSlider.value(), hSlider.x * 2 + hSlider.width, 35);
  text("lemmar " + lSlider.value(), lSlider.x * 2 + lSlider.width, 65);
  text("kropp " + kSlider.value(), kSlider.x * 2 + kSlider.width, 95);
}
