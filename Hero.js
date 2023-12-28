/*주인공을 정의*/
class Hero{
    constructor(container, src, x, y, width, height, velX, velY){
        this.container=container;
        this.img=document.createElement("img");
        this.src=src;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.velX=velX;
        this.velY=velY;

        this.img.src=this.src;

        //style 정의 
        this.img.style.position="absolute";
        this.img.style.left=this.x+"px";
        this.img.style.top=this.y+"px";

        this.img.style.width=this.width+"px";
        this.img.style.height=this.height+"px";

        this.container.appendChild(this.img);
    }

    //주인공 움직임 정의 
    move(){
        this.x += this.velX; //물리량 변화 
        this.img.style.left=this.x+"px";//시각화
    }
}