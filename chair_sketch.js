var rSlider, gSlider, bSlider;
var fixed = {x: 400, y:300}; //En fast punkt
var sitshoejd = 45;
var rygghoejd = {min: 0, max: 70};
var sitsvidd = {min: 30, max: 70};
var ryggvinkel = {min: 0, max: Math.PI/2};
var armstoed = {min: 0, max: rygghoejd};
var boejutskott_rygg = {min: 0, max: 30}
var ryggstoedsslut = {x: 400, y:300};

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
  boejutskott_ryggSlider = createSlider(boejutskott_rygg.min, boejutskott_rygg.max, 0);
  boejutskott_ryggSlider.position(20,140);

}

function draw() {
  frameRate(20);
  sitsvidd = sitsviddSlider.value();
  rygghoejd = rygghoejdSlider.value();
  ryggvinkel = ryggvinkelSlider.value();
  armstoed = armstoedSlider.value();
  boejutskott_rygg = boejutskott_ryggSlider.value();
  //var lemmar = lSlider.value();
  //var kropp = kSlider.value();
  strokeWeight(7);
  background(210, 200, 240);
  //ellipse(400, fixed.y-huvud/2, huvud*.8, huvud); //Huvudet
  stroke(128);

  line(fixed.x, fixed.y, fixed.x-sitsvidd, fixed.y); //sitsen
  line(fixed.x-sitsvidd, fixed.y, fixed.x-sitsvidd, fixed.y+sitshoejd); //framben
  line(fixed.x, fixed.y, fixed.x, fixed.y+sitshoejd); //bakben
  ryggstoedsslut.x = fixed.x+(rygghoejd*Math.sin(ryggvinkel)); //Punkten där ryggstödet slutar
  ryggstoedsslut.y = fixed.y-rygghoejd*Math.cos(ryggvinkel);
  line(fixed.x, fixed.y, ryggstoedsslut.x, ryggstoedsslut.y); //ryggstöd
  line(fixed.x-sitsvidd, fixed.y, fixed.x-sitsvidd, fixed.y-armstoed); //armstoed1 i framben
  line(fixed.x+armstoed*Math.tan(ryggvinkel), fixed.y-armstoed, fixed.x-sitsvidd, fixed.y-armstoed); //armstoed2 vågrät
  bezier(ryggstoedsslut.x, ryggstoedsslut.y, fixed.x+(1.2*rygghoejd*Math.sin(ryggvinkel)), fixed.y-1.2*rygghoejd*Math.cos(ryggvinkel), ryggstoedsslut.x, ryggstoedsslut.y, ryggstoedsslut.x+boejutskott_rygg, ryggstoedsslut.y-+boejutskott_rygg); //Böjutskottet på ryggen

  textSize(15);
  noStroke();
  text("sitsvidd " + sitsviddSlider.value(), sitsviddSlider.x * 2 + sitsviddSlider.width, 35);
  text("rygghoejd " + rygghoejdSlider.value(), rygghoejdSlider.x * 2 + rygghoejdSlider.width, 65);
  text("ryggvinkel " + ryggvinkelSlider.value()*180/Math.PI, ryggvinkelSlider.x * 2 + ryggvinkelSlider.width, 95);
  text("armstöd " + armstoedSlider.value(), armstoedSlider.x * 2 + armstoedSlider.width, 125);
  text("böjutskott rygg " + boejutskott_ryggSlider.value(), boejutskott_ryggSlider.x * 2 + boejutskott_ryggSlider.width, 155);

}
