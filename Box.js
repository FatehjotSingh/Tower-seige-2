class Box{
  constructor(x, y, color) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 40,50, options);
      this.width = 40
      this.height = 50
      this.color = color
      World.add(world, this.body);
      this.visibility = 255;
    }
    display(){
      rectMode(CENTER);
      fill(this.color)
      strokeWeight(2)
      if(this.body.speed<18){      
      rect(this.body.position.x,this.body.position.y,this.width,this.height)
     }
     else{
       World.remove(world,this.body)
       push();
       tint(255,this.Visiblity);
       this.Visiblity = this.Visiblity - 5;       
       //rect(this.body.position.x, this.body.position.y, 40, 50);
       pop();
      }
    }
}