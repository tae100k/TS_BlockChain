
# 타입스크립트로 블록체인 만들기

기본적인 수준의 Typescript으로 간단한 블록체인을 구현하였습니다.
## 개발 내용

- 새로운 인자를 입력받으면, 함수를 통해 새로운 블록을 만듭니다.
- 만들어진 블록의 자료구조는 다음과 같습니다.
```
    index number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
```
- previousHash가 일치하는 지를 확인 후 새로운 hash를 생성하며 체인을 이어나갑니다.
## 로컬 환경 구동

- 프로젝트 클론
```
    git clone https://github.com/wanted-pre-onboading-10/sirloin-admin-page
```
- 프로젝트 디렉토리 들어가기
```
    cd sirloin-admin-page
```
- 패키지 설치 및 프로젝트 시작

```
    npm install && npm run start
```
## 회고
- 처음에는 서툴러서 진도가 더디었지만 사용하다보니, 타입스크립트의 즉각적인 지적과 피드백을 통해 종국에는 코드를 짜는 게 더 수월해졌다.   