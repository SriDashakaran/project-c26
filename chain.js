class Chain{
    constructor(bodyA,bodyB){
    
        var option={
            bodyA:bodyA,
            bodyB:bodyB,
            length:50,
            stiffness:0.04,
        
            }
           this.chain=Constraint.create(option);
            World.add(world,this.chain)
    
    
    
    
    
    }
    display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    strokeWeight(5);
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    
    
    
    }
    
    }