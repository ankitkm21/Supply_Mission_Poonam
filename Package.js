class Package{
    constructor(x,y,width){
        var options = {
            restitution:3,
            isStatic:false,
        }
        
        this.width = width;
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, width, options);
        
        World.add(world,this.body)
    
    }
    


    display(){
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.width,this.width);

    }
}