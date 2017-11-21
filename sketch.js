var mic;
var myImg;
function preload() {
  myImg = loadImage("./assets/jez.jpg");
}


function setup() {
    angleMode(DEGREES);
  createCanvas(500, 500);

  mic = new p5.AudioIn();
  mic.start();
}
        

function draw() {
    image(myImg, 0, 0, 500, 500);


 
    var vol = mic.getLevel();
    
    stroke(255);
    line(200,vol*500,290,250);
    line(200,vol*300,330,250);
    line(250,vol*500,290,250);
    line(250,vol*300,330,250);
    line(300,vol*500,290,250);
    line(300,vol*300,330,250);
    line(350,vol*500,290,250);
    line(350,vol*300,330,250);
    line(400,vol*500,290,250);
    line(400,vol*300,330,250);
    line(450,vol*500,290,250);
    line(450,vol*300,330,250);
    line(500,vol*500,290,250);
    line(500,vol*300,330,250);
    line(550,vol*500,290,250);
    line(550,vol*300,330,250);
    line(600,vol*500,290,250);
    line(600,vol*300,330,250);
     line(650,vol*500,290,250);
    line(650,vol*300,330,250);
     line(700,vol*500,290,250);
    line(700,vol*300,330,250);
     line(750,vol*500,290,250);
    line(750,vol*300,330,250); 
    line(200,vol*500,350,250);
    line(200,vol*300,390,250);
    line(250,vol*500,350,250);
    line(250,vol*300,390,250);
    line(300,vol*500,350,250);
    line(300,vol*300,390,250);
    line(350,vol*500,350,250);
    line(350,vol*300,390,250);
    line(400,vol*500,350,250);
    line(400,vol*300,390,250);
    line(450,vol*500,350,250);
    line(450,vol*300,390,250);
    line(500,vol*500,350,250);
    line(500,vol*300,390,250);
    line(550,vol*500,350,250);
    line(550,vol*300,390,250);
    line(600,vol*500,350,250);
    line(600,vol*300,390,250);
    line(650,vol*500,350,250);
    line(650,vol*300,390,250);
    line(700,vol*500,350,250);
    line(700,vol*300,390,250);
    line(750,vol*500,350,250);
    line(750,vol*300,390,250);
    line(800,vol*500,350,250);
    line(800,vol*300,390,250);
    line(860,vol*500,350,250);
    line(860,vol*300,390,250);
     line(1300,vol*500,390,250);
    line(1300,vol*300,2000,250);
    
    
    
 
  

  
}