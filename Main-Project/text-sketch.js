let images = []
let value = 0;

let manXValue = 0;
let manYValue = 0;

let cloud3;
let rain;
let acrobats;
function preload() {
  cloud3=loadImage('cloud-3.png');
  rain=loadImage('rain.png');
  acrobats=loadImage('acrobats.png');
 // snowball=loadImage('snowball.png');
 // water=loadImage('water.png');
}

let width = window.innerWidth;
let height = window.innerHeight;
function setup() {
  createCanvas(2000, 900);
  images.push(loadImage('animation-1.png'))
  images.push(loadImage('animation-2.png'))
  images.push(loadImage('animation-3.png'))
  images.push(loadImage('animation-4.png'))
  images.push(loadImage('animation-5.png'))
  manYValue = 800 - 300 
}

function draw() {
  background(255);
  image( images[Math.floor(value)],manXValue, manYValue, 300, 300) 
  image(cloud3, 600, 350, 200, 200);
  image(acrobats, 1000, 60, 700, 700);
  //image(snowball, 620,655,200,200);
  
  
  line(50, height - 100, width -50, height - 100);
  stroke(0);
  
  if (value < images.length -1 ){
     value += 0.2
  } else {
    value = 0
  }
  
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    manXValue -= 50;
  } else if (keyCode === RIGHT_ARROW) {
     manXValue += 50;
  } else if (keyCode === UP_ARROW) {
    //JUMP
    manYValue = 800 - 400
    setTimeout(()=>{
      manYValue = 800 - 300
    }, 200)
    
   
    if(manXValue + 150 >= 500 && manXValue + 150 <= 700){
        let rain = document.getElementById('rain');
        rain.classList.add('faded-in-image');
       setTimeout(()=>{
        window.open("./index.html")
       },1000);
      
    }
    if(manXValue + 150 >= 620 && manXValue + 150 <= 820){

      let snowball = document.getElementById('snowball');
      snowball.classList.add('fade-out');

      setTimeout(()=>{
        let water = document.getElementById('water1');
        water.classList.add('faded-in-image');
       },800);

     setTimeout(()=>{
      window.open("./comic-page.html")
     },2000);
    
  }
  }
}