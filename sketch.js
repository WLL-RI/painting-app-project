let symmetry = 6;   
let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;
const osc = new p5.Oscillator();
const colors = ['green', 'blue', 'red', 'yellow', 'pink','purple','orange','gold','skyblue','white']
var okBut;
let t;
let penShape = "line";
let colorPicker;
let k;
let b;
let d, r, s;
let c;
let tSlider;
let sSlider;
let size;
function setup() {
    alert(
    "Hello! Welcome to my paint app! To draw, click on the rectangle labelled pen color, and select your desired color. To change pen shape, you can choose by clicking any of the four white buttons at the bottom corresponding to your deisred shape. They are labelled according to the shape they will give you once clicked. To adjust the size of the brush, use the slider labelled as pen size. Your pen size will appeare in the text above for easy reference. You can also change the background color, activate random colors mode, use the eraser or the clear button by simply clicking them. The help button grants easy access to this page for reference. You can save your work by clicking the save button. Lastly, do not forget to press the left, right arrows and the letter a of your computer for a surprise! Also, press and hold the letter b while drawing for crazy effects! Happy drawing :P"
  );
  this.x = winMouseX;
  this.y = winMouseY;
  createCanvas(windowWidth, windowHeight);
  background(220);

  colorPicker = createColorPicker("#lelele");
  colorPicker.position(3, 20);
  c = 0;

  b = 220;
  sSlider = createSlider(1, 50, 10);
  sSlider.position(0, 75);
  sSlider.size(80, 100);

 saveButton = createButton('save').position(5,140);
  saveButton.mousePressed(saveFile);

  // Creating the clear screen button
 

  // Creating the button for Full Screen
 

  
}

// Save File Function
function saveFile() {
  save('design.jpg');





}
function draw() {
  angleMode(DEGREES);
  const s = sSlider.value();
  
  if (penShape === "line" && mouseIsPressed) {
    strokeWeight(s);
    stroke(colorPicker.color());
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (penShape === "circle" && mouseIsPressed) {
    noStroke();
    fill(colorPicker.color());
    ellipse(mouseX, mouseY, s / 2, s / 2);
  } else if (penShape === "rectangle" && mouseIsPressed) {
    fill(colorPicker.color());
    noStroke();
    rect(mouseX, mouseY, s);
  } else if (penShape === "eraser" && mouseIsPressed) {
    stroke(b);
    strokeWeight(s);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (penShape === "random" && mouseIsPressed) {
   strokeWeight(s)
    stroke(color(random(255), random(255), random(255), t));
    line(mouseX,mouseY,pmouseX,pmouseY)
  } else if (penShape === "star" && mouseIsPressed) {
    fill(colorPicker.color());
    noStroke();

    push();
    translate(mouseX, mouseY);

    beginShape();
    for (var i = 0; i < 720; i += 720 / 5) {
      var rad = s / 2;
      var x = rad * cos(i);
      var y = rad * sin(i);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }
  if (penShape === "help" && mouseIsPressed) {
    textSize(15);
    text(
      "Hello! Welcome to my paint app! This is the help center.To exit the page, ",
      105,
      50
    );
    text(
      "simply press the up arrow. To draw, click on the rectangle labelled pen color ",
      105,
      70
    );
    text(
      "and select your desired color. To change pen shape, you can choose by",
      105,
      90
    );
    text(
      "clicking any of the four white buttons at the bottom corresponding to your",
      105,
      110
    );
    text(
      "deisred shape. To adjust the size of the brush, use the slider labelled as pen",
      105,
      130
    );
    text(
      " size. Your size will appeare in the text above for easy reference. You can also",
      105,
      150
    );
    text(
      "change the background color, activate random colors mode, use the eraser or ",
      105,
      170
    );
    text(
      "the clear button by simply clicking them. Lastly, do not forget to press the left, ",
      105,
      190
    );
 
    text("right arrows and the letter a of your computer for a surprise! ", 105, 210);
    text('Also, press and hold the letter b while drawing for crazy effects!',105,230)
    text('You can save your work by clicking the save button, and happy drawing! :P',105,250)
  }

  strokeWeight(0);

  {
    textSize(3);
    fill(220);
    strokeWeight(0);
    rect(0, 0, 100, windowHeight);
    fill(b);

    textSize(10);
    textAlign(CENTER);
    fill(0);

    text("pen size:", 35, 115);
    text(s, 65, 115);
    text("pen color", 25, 15);
    text("random colors", 35, 60);
 
    text("pen shape", 45, 465);
    text("circles", 20, 480);
    text("rectangles", 60, 480);
    text("line", 18, 517);
    text("star", 55, 517);
    text("help", 40, 245);
  }
  textAlign(LEFT);

  //create a button
  //draw a button
  fill(random(255), random(255), random(255));
  ellipse(25, 85, 40, 40);
  //compute distance and radius
  d = dist(mouseX, mouseY, 25, 85);
  r = 40 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    penShape = "random";
  }
  //create a button
  //draw a button
  textSize(10);
  fill(0);
  strokeWeight(0);
  text("eraser", 7, 200);
  fill(0);
  ellipse(20, 220, 31, 31);
  fill(220);
  ellipse(20, 220, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 20, 220);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    penShape = "eraser";
  }
  fill(0);
  strokeWeight(0);
  text("clear", 48, 200);
  fill(0);
  strokeWeight(0);
  ellipse(60, 220, 31, 31);
  fill(220);
  ellipse(60, 220, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 60, 220);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = 220;
    fill(220);
    rect(100, 0, windowWidth, windowHeight);
  }
  textSize(10);
  fill(0);
  strokeWeight(0);
  text("background colours", 10, 290);

  fill("red");
  ellipse(25, 310, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 25, 310);
  r = 30 / 2;
  if (d < r && mouseIsPressed) {
    b = "red";
    fill("red");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("orange");
  ellipse(60, 310, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 60, 310);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "orange";
    fill("orange");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("yellow");
  ellipse(25, 342, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 25, 342);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "yellow";
    fill("yellow");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("green");
  ellipse(60, 342, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 60, 342);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "green";
    fill("green");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("cyan");
  ellipse(25, 375, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 25, 375);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "cyan";
    fill("cyan");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("blue");
  ellipse(60, 375, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 60, 375);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "blue";
    fill("blue");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("white");
  ellipse(25, 408, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 25, 408);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "white";
    fill("white");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill(0);
  ellipse(60, 408, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 55, 400);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = 0;
    fill(0);
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("pink");
  ellipse(25, 440, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 25, 440);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "pink";
    fill("pink");
    rect(100, 0, windowWidth, windowHeight);
  }

  fill("purple");
  ellipse(60, 440, 30, 30);
  //compute distance and radius
  d = dist(mouseX, mouseY, 60, 440);
  r = 30 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    b = "purple";
    fill("purple");
    rect(100, 0, windowWidth, windowHeight);
  }
  fill("white");
  ellipse(18, 495, 25, 25);
  //compute distance and radius
  d = dist(mouseX, mouseY, 18, 495);
  r = 25 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    penShape = "circle";
  }
  fill("white");
  ellipse(55, 495, 25, 25);
  //compute distance and radius
  d = dist(mouseX, mouseY, 55, 495);
  r = 25 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    penShape = "rectangle";
  }
  fill("white");
  ellipse(18, 533, 25, 25);
  //compute distance and radius
  d = dist(mouseX, mouseY, 18, 533);
  r = 25 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    penShape = "line";
  }
  fill("white");
  ellipse(55, 533, 25, 25);
  //compute distance and radius
  d = dist(mouseX, mouseY, 55, 533);
  r = 25 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    penShape = "star";
  }
  fill("white");
  ellipse(40, 265, 35, 35);
  //compute distance and radius
  d = dist(mouseX, mouseY, 40, 265);
  r = 35 / 2;
  //give logic to button
  if (d < r && mouseIsPressed) {
    penShape = "help";
  }
  fill(0);
  textSize(30);
  text("?", 31, 275);
  {
    if (keyIsPressed && keyCode === 39) {
      fill(220);
      rect(0, 0, 100, windowHeight);
      fill(random(225), random(225), random(255), random(255));
      ellipse(random(windowWidth), random(windowHeight), random(100));
      noStroke();
    }
    if (keyIsPressed && keyCode === 37) {
      fill(220);
      rect(0, 0, 100, windowHeight);
      fill(random(225), random(225), random(255), random(255));
      rect(random(windowWidth), random(windowHeight), random(100), random(100));
    }
    if (keyIsPressed && keyCode === 38) {
      b = 220;
      fill(220);
      rect(100, 0, windowWidth, windowHeight);
    }
    if (keyIsPressed && keyCode === 65) {
 
       noStroke()
     background('skyBlue');
  fill('lightGreen')
  strokeWeight(1)
  rect(width*0/5, height*4/5,width, height*1/5)
fill('yellow')
  ellipse(width*2/8,height*1/8,height*1/5)
  fill('darkGreen')
  triangle(width*1/2,height*8/10,width*3/4,height*4/10, width, height*8/10)
  fill('Green')
  triangle(width*0/10, height*8/10, width*3.5/10, height*60/100, width*7.5/10,height*8/10)
  strokeWeight(1)
   line(width*1/2,height*0/2,width*1/2,height)
   line(height*0/2,width*1/2,height,width*1/2)
 fill(0)
  strokeWeight(1)
  rect(width*4.9/10,height*4.9/10,width*2/100,height*4/100)
  rect(width*3.3/10,height*1/2,width*2/100,height*4/100)
  rect(width*3.3/10,height*4/10,width*2/100,height*4/100)
  rect(width*4.1/10,height*4.6/10,width*2/100,height*4/100)
  //yay



  fill('black')
  rect(width*4.3/10,height*4.6/10,width*4/100*2/4)
  rect(width*5.1/10,height*4.9/10,width*4/100*2/4)
  rect(width*3.5/10,height*5/10,width*4/100*2/4)
  rect(width*3.5/10,height*4/10,width*4/100*2/4)
    }
    if (keyIsPressed && keyCode === 66){
   translate(width / 2, height / 2);

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    let mx = mouseX - width / 2;
    let my = mouseY - height / 2;
    let pmx = pmouseX - width / 2;
    let pmy = pmouseY - height / 2;
    
    if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        let sw = sSlider.value();
        strokeWeight(sw);
        line(mx, my, pmx, pmy);
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    }
  
}

    }
  }
}
