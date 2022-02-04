src에서 무언가를 바꿀 때마다 dist가 바뀐다.
```
    "start": "tsc-watch --onSuccess \" node dist/index.js\" ",
```
**interface**
- interface는 자바스크립트에 없는 내용이고, Object를 좀 더 예측 가능하기 쉽게 하기 위해서이다.
```
interface PersonType {
    name:string;
    age:number;
    gender:string;
}
```
```
const person = {
    name:"김지환",
    age:20,
    gender:"male",

}
```
```
const sayHi = (person:PersonType):string =>{
    return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
}
```
**Class**
- 인터페이스는 원래 자바스크립트에 관여하지 않는다.
- 그럼에도 class를 사용하면 인터페이스를 자스에 넣을 수 있다.

```
class Human {
    public name:string;
    public age: number;
    constructor(name:string, age:number, gender:string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const JH = new Human(
    "Jihwan", 20, "male"
);
```
public : 권한 설정(자스는 신경쓰지 않음)
constructor : 클래스로 객체를 만들때마다 호출되는 method