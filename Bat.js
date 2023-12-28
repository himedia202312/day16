/*박쥐를 정의*/
class Bat extends Bird{

    //박쥐의 생성자가 박쥐의 생성에 관여하는 메서드이기 때문에 
    //박쥐 탄생 시점에, 먼저 새의 인스턴스의 생성이 선행되어야 한다..
    //oop 언어에서는 부모 클래스를 가리켜 super 클래스, 자식은 sub 클래스
    //주의)  parent, child 라는 단어는  GuI (그래픽) 에서 포함관계를 의미 
    //      parent란 특정 요소를 안고 있는 바깥쪽 컨테이너...
    //      chile 란 특정 요소안에 들어있는 자식 요소를 의미..
    constructor(){
        //부모의 인스턴스 생성이 선행되어야 함..
        //하지만 개발자가 아무것도 명시하지 안으면, default로 super() 생성자
        //호출이 생략되어 있다..
        super("오리", "black"); //must call super constructor()

        this.age=5;
    }
}