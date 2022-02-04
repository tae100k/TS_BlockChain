src에서 무언가를 바꿀 때마다 dist가 바뀐다.

```
    "start": "tsc-watch --onSuccess \" node dist/index.js\" ",
```

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

-   인터페이스는 원래 자바스크립트에 관여하지 않는다.
-   그럼에도 class를 사용하면 인터페이스를 자스에 넣을 수 있다.

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

```
"compilerOptions": {
        "module":"commonjs", //node.js를 평범하게 사용하고 다양한 걸 import하거나 export할 수 있게 만든다.
        "target" : "ES2015", //어떤 버전의 자바스크립트로 컴파일 되고 싶은 지 적는다.
        "sourceMap": true,
        "outDir":"dist" //sourcemap을 하고 싶은 지
    },
```

outDir : 모든 타입스크립트는 src, 컴파일된 것은 dist에 들어간다.

**import**

```
import * as 이름 from "라이브러리"
```
