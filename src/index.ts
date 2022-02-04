import * as CryptoJS from 'crypto-js';

class BlockType {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    // 메서드 자리
    // hash를 계산하는 static method를 만든다.
    // method는 클래스안에 있다.
    // (STATIC을 붙이면) 클래스 생성없이도 호출할 수 있다.
    static calculateBlockHash = (index: number, previousHash: string, timestamp: number, data: string): string =>
        CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    //블록의 구조 설정
    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.index = index;
        //hash : 모든 속성을 수학적으로 이상한 하나의 문자열로 결합한 것
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: BlockType = new BlockType(0, '202020339403984', '', 'Hello', 123456);

//블록체인은 블록 체인의 연결이다. 따라서 Block타입의 어레이를 넣어주고 처음 값은 genesisBlock을 넣어준다.
//지정한 블록체인의 구조에 맞는 것만 블록이라고 하며,
//블록만 블록 체인에 저장할 수 있다.
let blockchain: [BlockType] = [genesisBlock];

console.log(blockchain);

export {};
