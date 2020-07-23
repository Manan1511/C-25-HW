class Dustbin{
    constructor(x,y,width,height){
        this.image = loadImage("sprites/dustbingreen.png")
        var options={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.body1 = Bodies.rectangle(x+50,y-42.5,width-85,height+85,options);
        this.body2 = Bodies.rectangle(x-50,y-42.5,width-85,height+85,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        World.add(world,this.body1);
        World.add(world,this.body2);
        
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y-40,this.width,this.height-170);
        
    }
}