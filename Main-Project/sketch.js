let images = []
let value = 0;

let manXValue = 0;
let manYValue = 0;

let cloud1;
let cloud2;
let cloud3;
let cloud4;
let cloud5;
let cloud6;
let cloud7;
let cloud8;
let rain;
let umbrella1;
let umbrella2;
let shel;
let sun;
let shoe;
function preload() {
  cloud1 = loadImage('cloud-1.png');
  cloud2=loadImage('cloud-2.png');
  cloud3=loadImage('cloud-3.png');
  cloud4=loadImage('cloud-4.png');
  cloud5=loadImage('cloud-5.png');
  cloud6=loadImage('cloud-6.png');
  cloud7=loadImage('cloud-7.png');
  cloud8=loadImage('cloud-8.png');
  rain=loadImage('rain.png');
  umbrella1=loadImage('open-umbrella.png');
  umbrella2=loadImage('closed-umbrella.png');
  shel=loadImage('shel.png');
  sun= loadImage('sun.png');
  shoe= loadImage('fly-shoe.png');

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

function calculateXPercentage(percentage){
  let width = window.innerWidth;
  let newPercentage =  (percentage / width) * 100;
  return newPercentage;
}

function calculateYPercentage(percentage){
  let height = window.innerHeight;
  let newPercentage =  (percentage / height) * 100;
  return newPercentage;
}



function draw() {

  background(255);
  
  image( images[Math.floor(value)],manXValue, manYValue, 300, 300) 
  
  
  image(cloud1, 270,300 , 200, 200);
  image(cloud2, 50, 300, 200, 200);
  image(rain, 50, 300, 200, 200);
  image(cloud3, 500, 300, 200, 200);
  image(rain, 500, 300, 200, 200);
  image(shel,1600,330,400,450);
  image(cloud4, 1000, 300, 200, 200);
  image(rain, 1000, 310, 200, 200);
  image(cloud5, 1220, 300, 200, 200);
  image(cloud6, 1450, 300, 200, 200);
  image(rain, 1450, 310, 200, 200);
  // image(sun, 650, 80, 300, 300);
  image(shoe, 680, 60, 300, 300);
  image(umbrella1, 1500, 60, 300, 300);
  image(umbrella2, 300, 60, 300, 300);
  image(cloud7, 1200, 80, 200, 200);
  image(cloud8, 220, 60, 200, 200);
  
  
  line(50, height - 100, width -50, height - 100);
  stroke(0);
  
  if (value < images.length -1 ){
     value += 0.2
  } else {
    value = 0
  }
  
  
  // //  FLOATING CLOUD ONE
    translate(width / 17, height / 17);
     translate(p5.Vector.fromAngle(millis() / 1000, 40));
     image (cloud1,-100,-5, 200, 200);
  
  
   translate(width / 6, height / 30);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image (cloud1,+100,-1, 150, 150);
  
  translate(width / 2, height / 40);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image (cloud2,-100,-1, 150, 150);
   
  translate(width / 10 , height / 60);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image (umbrella2,-100,-1, 200, 200);

  translate(width / 2, height / 35);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image (cloud6,-100,-1, 300, 300);

  //  //umbrellas
  translate(width / 2, height / 35);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  image (umbrella1,-100,-1, 300, 300);

  //  translate(width / 10, height / 10);
  //   translate(p5.Vector.fromAngle(millis() / 1000, 40));
  //  image (umbrella2,8,-200, 300, 300);

  
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
    
    if(manXValue + 150 >= 270 && manXValue + 150 <= 470){
       let secondImage = document.getElementById('second-rain');
       secondImage.classList.add('faded-in-image');
       setTimeout(()=>{
        window.open("./poem-page.html", "_self")
       },2000);
    }

    if(manXValue + 150 >= 1220 && manXValue + 150 <= 1420){
      let thirdRain = document.getElementById('third-rain');
      thirdRain.classList.add('faded-in-image');
      setTimeout(()=>{
       window.open("./text-page.html","_self")
      },1000);
    }
    if(manXValue + 150 >= 1600 && manXValue + 150 <= 2000){
      setTimeout(()=>{
       window.open("./shel-page.html", "_self")
      },1000);
    }

  }
}

let isPlaying = false;
const audio = document.getElementById('myAudio');

document.addEventListener('click', function(){
  if(isPlaying == true){
    audio.pause();
    
    isPlaying = false;
  } else {
    audio.play();
    isPlaying = true;
  }
})