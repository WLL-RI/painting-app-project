class MyLine {
  constructor(penColor, penWidth, penShape) {
    this.px = pwinMouseX
    this.py = pwinMouseY
    this.x = winMouseX
    this.y = winMouseY
    
    this.penColor = penColor
    this.penWidth = penWidth
    this.penShape = penShape
  }
  show(){
    if(this.penShape === 'Line'){
    stroke(this.penColor)
    strokeWeight(xSlider.value())
    line(this.px, this.py, this.x, this.y)
  }
  if (this.penShape === 'Circle'){
  fill(this.penColor)
  noStroke()
  ellipse(this.x,this.y,x)
  }
    if (this.penShape === 'Rectangle'){
      fill(this.penColor)
      noStroke()
      rect(this.x,this.y,x)
    }
  }
}