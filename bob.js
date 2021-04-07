class bob{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r

        this.body=Bodies.circle(this.x,this.y,(this.r)/2,options)
        
        World.add(world,this.body)
    }
    display(){
        var paperPose=this.body.position
        push() 
        translate(paperPose.x, paperPose.y);  
        strokeWeight(3); 
        rectMode(CENTER)
        fill(255,0,255) 
        ellipse(0,0,this.r, this.r);
        //ellipse(0,0,this.radius,this.radius); 
        pop()
    }
}