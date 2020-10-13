let diameter = 20;
let bcolor = 0;
let squareColor = 0;


function preload(){
  // put preload code here

}

function setup() {
  createCanvas(windowWidth,windowHeight);


}

function draw(){

let bWhite = map(mouseX, 0, width, 0, 255);
 let bBlack = map(mouseY, 0, height, 0, 255);
 background(bWhite);
 background(bBlack);


for (let x = diameter; x < windowWidth - 20; x += 25) {
for (let y = diameter; y < windowHeight - 20; y += 25) {

  {
    if (mouseIsPressed && key == 'c' || key == 'C') {
              fill(squareColor);
              squareColor = color(random(255), random(255), random(255));
                    ellipse(x+10,y+10,diameter);
            }

      else if (mouseIsPressed) {
              fill(squareColor);
              squareColor = color(random(255), random(255), random(255));
                      rect(x,y, diameter);
            }

      else if (key == 'c' || key == 'C') {
        fill(squareColor);
        ellipse(x+10,y+10, diameter);
      }

      else if (key == 's' || key == 'S') {
        fill(squareColor);
        rect(x,y, diameter);
      }

      // else if(mouseX < windowWidth/2 && mouseY < windowHeight/2){
      //   fill(squareColor);
      // }
      else {
        fill(squareColor);
        rect(x,y, diameter);

      }
        noStroke()
        // translate(width / 2, height / 2);
        // rotate(frameCount * 2);
        // scale(sin(frameCount))

}
}
}


rect(20,20,220,120);
fill("white");

fill("white");
textSize(16);
text("Click to generate your color!", 30, 40);
text(squareColor, 30, 120);
text("Press C for", 30, 60);
text("Press S for", 30, 80);


rect(117, 70.5, 10, 10);
ellipse(122, 55, 12);


}

// function mousePressed() {
// 	squareColor = color(random(255), random(255), random(255));
// }


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
