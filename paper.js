class Paper {  
    constructor(x, y, radius){
        this.paper=loadImage("paper.png")
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic' : false
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
	    World.add(world, this.body);
       
        
   }
   display(){
    fill("red");

    imageMode(CENTER);
    image(this.paper,this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}