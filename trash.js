class Trash {

    constructor(x,y){
    this.x=x
    this.y=y;
    this.trashWidth=122;
    this.trashHeight=100;
    this.wallThickness=20;
    this.angle=0;

    this.bottomBody=Bodies.rectangle(this.x,this.y,this.trashWidth,this.wallThickness,{isStatic:true})
    this.leftWallBody=Bodies.rectangle(this.x-this.trashWidth/2,this.y-this.trashHeight/2,this.wallThickness,this.trashHeight/2,{isStatic:true});
    Matter.Body.setAngle(this.leftWallBody,this.angle);

    this.rightWallBody=Bodies.rectangle(this.x+this.trashWidth/2, this.y-this.trashHeight/2, this.wallThickness, this.trashHeight/2,{isStatic:true})
    Matter.Body.setAngle(this.rightWallBody,-1*this.angle)
    World.add(world, this.bottomBody)
    World.add(world, this.leftWallBody)
    World.add(world, this.rightWallBody)
    }
    display(){

        var posBottom=this.bottomBody.position;
        var posLeft=this.leftWallBody.position;
        var posRight=this.rightWallBody.position;

        push()
        translate(posLeft.x, posLeft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(this.angle)
        rect(0,0,this.wallThickness,this.trashHeight);
        pop()

        push()
        translate(posRight.x, posRight.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(-1*this.angle)
        rect(0,0,this.wallThickness,this.trashHeight);
        pop()

        push();
        translate(posBottom.x, posBottom.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        stroke(255)
        rotate(300.02+this.angle)
        rect(0,0,this.wallThickness,this.trashHeight);
        pop()
    }
}