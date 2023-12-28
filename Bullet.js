class Bullet{
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

    //날아가는 운동 정의 
    move(){
        this.y += this.velY; //물리량 변화 

        //충돌여부를 체크하여
        //충돌이면 1)화면에서 제거, 2)배열에서도 제거
        //화면에 있는 모든~~ 적군을 대상으로 충돌체크 
        let result;
        for(let i=0;i<enemyArray.length;i++){ //층수 만큼(이차원배열의 길이만큼)
            for(let a=0;a<enemyArray[i].length;a++){ //호수 만큼
                result = collisionCheck(this , enemyArray[i][a]);
                if(result){
                    console.log("닿았어");

                    //적군을 화면에서 제거
                    wrapper.removeChild(enemyArray[i][a].img); 
                    
                    //나도 화면에서 제거 
                    wrapper.removeChild(this.img);


                    //적군 배열에서도 제거 
                    enemyArray[i].splice(a , 1);

                    //나도 배열에서 제거 
                    bulletArray.splice(bulletArray.indexOf(this) ,1);
                }
            }
        }

        //적군과 충돌이 발생하지 않은 총알의 경우, 화면밖으로 나가면 제거 
        //y좌표가 음수가 되면 제거...
        if(this.y < 100){

                wrapper.removeChild(this.img);
                console.log(this.img);
                bulletArray.splice(bulletArray.indexOf(this) ,1);


        }


        this.img.style.top=this.y+"px";//시각화
    }
}