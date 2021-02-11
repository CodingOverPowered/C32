class Tree{
    constructor(x,y,width,height){
        var options={
        isStatic:true,
         }
        this.image=loadImage("Img/Banana.png")
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.height=height;
        this.width=width;
        //this.thickness=20
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
     push()
     translate(pos.x,pos.y)
     imageMode(CENTER)
     rectMode(CENTER)
     fill("orange")
     image(this.image,0,0,this.width,this.height)
     pop()
    }   
     //
}  