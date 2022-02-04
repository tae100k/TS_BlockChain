src에서 무언가를 바꿀 때마다 dist가 바뀐다.
```
    "start": "tsc-watch --onSuccess \" node dist/index.js\" ",
```
```
 "compilerOptions": {
        "module":"commonjs", //node.js를 평범하게 사용하고 다양한 걸 import하거나 export할 수 있게 만든다.
        "target" : "ES2015", //어떤 버전의 자바스크립트로 컴파일 되고 싶은 지 적는다.
        "sourceMap": true,
        "outDir":"dist" //sourcemap을 하고 싶은 지
    }, 
```
outDir : 모든 타입스크립트는 src, 컴파일된 것은 dist에 들어간다.