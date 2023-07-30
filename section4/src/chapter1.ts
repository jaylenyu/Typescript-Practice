// 함수타입 표현식
// 반복되는 서로다른 계산식에 타입을 모두 넣기 어렵기 때문에 한 번에 작성함

type Operation = (a: number, b: number) => number;
// 타입별칭        //표현식

let addType: Operation = (a, b) => a + b; 
//타입별칭으로 작성해도 됨
let addFunc: (a: number, b: number) => number = (a, b) => a + b;
//함수표현식으로 작성해도 됨
let sub: Operation = (a, b) => a - b;
let multiply: Operation = (a, b) => a * b;
let devide: Operation = (a, b) => a / b;


// 호출 시그니쳐 (콜 시그니쳐)

type Operation2 = {
    (a: number, b:number): number;
    name: string;
}

let add2: Operation2 = (a, b) => a + b; 
let sub2: Operation2 = (a, b) => a - b;
let multiply2: Operation2 = (a, b) => a * b;
let devide2: Operation2 = (a, b) => a / b;
