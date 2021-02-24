class Ball{
constructor(x,y,radius){
var option={
density:1,
frictionAir:0.005,
}
this.body=Bodies.circle(x,y,radius);
this.radius=radius
World.add(world,this.body)
}
display(){
var pos = this.body.position;
push()
strokeWeight(4)
stroke("red")
fill("white")
ellipseMode(RADIUS);
ellipse(pos.x,pos.y,this.radius,this.radius);
}
}