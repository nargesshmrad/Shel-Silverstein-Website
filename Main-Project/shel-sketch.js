let images = []
let value = 0;

let manXValue = 0;
let manYValue = 0;

let cloud3;
let rain;
let tree;
let shel;


function preload() {
  cloud3=loadImage('cloud-3.png');
  rain=loadImage('rain.png');
  tree=loadImage('tree.png');
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
  image(cloud3, 800, 300, 200, 200);
  //image(snowball, 620,655,200,200);
  image(tree,1000,200,600,600);
  
  
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
    
   
    if(manXValue + 150 >= 800 && manXValue + 150 <= 1000){
        let rain = document.getElementById('rain');
        rain.classList.add('faded-in-image');
       setTimeout(()=>{
        window.open("./index.html","_self")
       },1000);
      
    }
  }
}