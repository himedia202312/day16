/*펜을 정의*/
class Pen{
    //상속관계에서 부모의 생성자에 매개변수가 정의되어 있을때는
    //자식 클래스가  default 생성자를 호출자를 호출하지 말고, 
    //적극적으로 부모의 생성자의 매개변수를 넘겨줘야 한다..
    constructor(brand){
        this.brand=brand;
        this.price=500;
    }
}