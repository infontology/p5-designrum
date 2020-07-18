var rSlider, gSlider, bSlider;
var fixed = {x: 400, y:300}; //En fast punkt
var sitshoejd = 45;
var rygghoejd = {min: 30, max: 70};
var sitsvidd = {min: 30, max: 70};
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
  sitsviddSlider = createSlider(sitsvidd.min, sitsvidd.max, 45);
  sitsviddSlider.position(20, 20);
  rygghoejdSlider = createSlider(rygghoejd.min, rygghoejd.max, 45);
  rygghoejdSlider.position(20, 50);
}

function draw() {
  var sitsvidd = sitsviddSlider.value();
  rygghoejd = rygghoejdSlider.value();
  //var lemmar = lSlider.value();
  //var kropp = kSlider.value();
  strokeWeight(7);
  background(210, 200, 240);
  //ellipse(400, fixed.y-huvud/2, huvud*.8, huvud); //Huvudet
  stroke(128);

  line(fixed.x, fixed.y, fixed.x-sitsvidd, fixed.y);
  line(fixed.x-sitsvidd, fixed.y, fixed.x-sitsvidd, fixed.y+sitshoejd);
  line(fixed.x, fixed.y, fixed.x, fixed.y+sitshoejd);
  line(fixed.x, fixed.y, fixed.x, fixed.y-rygghoejd);

  strokeWeight(1);
  text("sitsvidd " + sitsviddSlider.value(), sitsviddSlider.x * 2 + sitsviddSlider.width, 35);
  text("rygghoejd " + rygghoejdSlider.value(), rygghoejdSlider.x * 2 + rygghoejdSlider.width, 65);


}
