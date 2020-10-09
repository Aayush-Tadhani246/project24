class Paper{

    constructor(x,y,radius){

        var options ={

            isStatic:false,
            'restitution': 0.3, 
            'friction': 0.5, 
            'density': 0.5

        }

        this.body = Bodies.circle(x,y,radius/2,options);
        this.x = x;
        this.y = y;
        this.radius = radius/2;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);

       rectMode(CENTER);
        
      fill("purple");
      ellipse(0,0, this.radius,this.radius);
      pop();
    }
}
