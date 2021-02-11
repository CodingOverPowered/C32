class Stone{
    constructor(x,y,r){
        var options=
        {
            isStatic:false,
            restitution:0,
            friction:0,
            density:1.2
            
        }
        this.image=loadImage("Img/stone.png")
        this.body=Bodies.circle(x,y,r,options)
        this.x=x
        this.y=y
        this.r=25
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
    image(this.image, 0,0,this.r*2, this.r*2)
    pop()
    }
    
    
  }
  