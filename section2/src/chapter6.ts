// any
// type 체크를 하지 않기 때문에 코드작성 자유도가 높은 반면 런타임 오류를 일으킴

let anyVar: any = 10;
anyVar = "anyString";

console.log(anyVar);

anyVar = true;
console.log(anyVar);

anyVar = {};
console.log(anyVar);

anyVar = () => {
    console.log(anyVar);
}
console.log(anyVar);

let num: number = 100;
num = anyVar

console.log(num);


// unknown
let unknownVar: unknown;

unknownVar = 0;
console.log(unknownVar);

unknownVar = "string";
console.log(unknownVar);

unknownVar = true;
console.log(unknownVar);

unknownVar = () => {
    console.log(unknownVar);
}
console.log(unknownVar);
