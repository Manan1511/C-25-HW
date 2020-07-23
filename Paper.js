class Paper{
    constructor(x,y,radius){
        this.image = loadImage("sprites/paper.png")
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body = Bodies.circle(x,y,25,options);
        this.radius = radius;
        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}