class Snow{
constructor(x,y,radius){
    var option = {
        "restitution": 0.8,
        "friction": 2,
        "density":0.001,
      "isStatic": false
    }
    this.body=Bodies.circle(x,y,radius,option);
    this.radius=radius
    this.image=loadImage("snow4.webp");
    this.image.scale=0.2;
    World.add(world,this.body);
}
display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.radius,this.radius);

    pop();  
}

}