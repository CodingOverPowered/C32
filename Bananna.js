class Bananna{
    constructor(x,y,radius){
        var options=
        {
            isStatic:true,
            restitution:0.5,
            friction:1,

            
        }
       
        this.body=Bodies.circle(x, y, radius, options)
        this.image=loadImage("Img/bnana.png")
        this.x=x
        this.y=y
        this.radius=radius
        World.add(world,this.body)


    }
  
    display(){
    var paperpos=this.body.position;
    push()
    translate(paperpos.x, paperpos.y);
    rectMode(CENTER)
    imageMode(CENTER);
    ellipseMode(RADIUS)
    fill("Purple")
    image(this.image, 0,0,this.radius*2, this.radius*2)
    pop()
    }
    
    
}
