// 타입 추론
// 타입을 지정해주지 않아도 알아서 타입을 추론하여 지정한다.

let a = 10; // a:number

let b = {
    name: "summer",
    age: 20,
}

let {name, age} = b;  // name: string, age: number

function func(message = "hello") { // message: string
    return "hello"
}

// 암묵적 any type 추론

let result; // 암묵적으로 any타입을 갖게되고 이러한 암묵적인 any 타입은 진화할 수 있음
result = 10;
result.toFixed();
// result는 number로 추론됨

result = "string";
result.toUpperCase();
// result는 string으로 다시 추론됨


const num = 10; 
const string = "string";
// const 는 값 자체가 저장되어 타입 === 값이 됨