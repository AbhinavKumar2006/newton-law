class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:5,
            length:2,
        }
        this.pointB=pointB;
        this.thread = Constraint.create(options);
        World.add(world,this.thread);
    }

    display(){
        var pointA =  this.thread.bodyA.position;
        var pointB = this.pointB;
        stroke("white");
        strokeWeight(1);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}