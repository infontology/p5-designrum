var rSlider, gSlider, bSlider;
var fixed = {x: 400, y:300}; //En fast punkt
var sitshoejd = 45;
var rygghoejd = {min: 0, max: 70};
var sitsvidd = {min: 30, max: 70};
var ryggvinkel = {min: 0, max: Math.PI/2};
var armstoed = {min: 0, max: rygghoejd};


function setup() {
  // create canvas
  createCanvas(710, 400);


  // create sliders
  sitsviddSlider = createSlider(sitsvidd.min, sitsvidd.max, 45);
  sitsviddSlider.position(20, 20);
  rygghoejdSlider = createSlider(rygghoejd.min, rygghoejd.max, 45);
  rygghoejdSlider.position(20, 50);
  ryggvinkelSlider = createSlider(ryggvinkel.min, ryggvinkel.max, 0, 0.01);
  ryggvinkelSlider.position(20, 80);
  armstoedSlider = createSlider(armstoed.min, armstoed.max, 0);
  armstoedSlider.position(20, 110);


}

function draw() {
  frameRate(20);
  sitsvidd = sitsviddSlider.value();
  rygghoejd = rygghoejdSlider.value();
  ryggvinkel = ryggvinkelSlider.value();
  armstoed = armstoedSlider.value();
  //var lemmar = lSlider.value();
  //var kropp = kSlider.value();
  strokeWeight(7);
  background(210, 200, 240);
  //ellipse(400, fixed.y-huvud/2, huvud*.8, huvud); //Huvudet
  stroke(128);

  line(fixed.x, fixed.y, fixed.x-sitsvidd, fixed.y); //sitsen
  line(fixed.x-sitsvidd, fixed.y, fixed.x-sitsvidd, fixed.y+sitshoejd); //framben
  line(fixed.x, fixed.y, fixed.x, fixed.y+sitshoejd); //bakben
  line(fixed.x, fixed.y, fixed.x+(rygghoejd*Math.sin(ryggvinkel)), fixed.y-rygghoejd*Math.cos(ryggvinkel)); //rygg
  line(fixed.x-sitsvidd, fixed.y, fixed.x-sitsvidd, fixed.y-armstoed); //armstoed1 i framben
  line(fixed.x+armstoed*Math.tan(ryggvinkel), fixed.y-armstoed, fixed.x-sitsvidd, fixed.y-armstoed); //armstoed2 vågrät

  textSize(15);
  noStroke();
  text("sitsvidd " + sitsviddSlider.value(), sitsviddSlider.x * 2 + sitsviddSlider.width, 35);
  text("rygghoejd " + rygghoejdSlider.value(), rygghoejdSlider.x * 2 + rygghoejdSlider.width, 65);
  text("ryggvinkel " + ryggvinkelSlider.value()*180/Math.PI, ryggvinkelSlider.x * 2 + ryggvinkelSlider.width, 95);
  text("armstöd " + armstoedSlider.value(), armstoedSlider.x * 2 + armstoedSlider.width, 125);


}
