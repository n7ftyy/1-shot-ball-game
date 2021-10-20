class Ball
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2		
			}
		this.x=x;
		this.y=y;
        this.r=r;
		this.body=Bodies.circle(x, y, r, options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var ballPos=this.body.position;		

			push()
			translate(ballPos.x, ballPos.y);
			ellipseMode(RADIUS)
			strokeWeight(4);
			fill(27,29,170)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}