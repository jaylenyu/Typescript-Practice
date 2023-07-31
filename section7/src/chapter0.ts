// 제네릭

function func(value: any) {
    return value;
}

let num = func(10);
// type: any
let str = func("str");
// type: any
let bool = func(false);
// type: any
// 제네릭함수
// 함수의 인수에 따라서 반환값을 가변적으로 정할 수 있도록 해주는 함수

function funcGeneric<T>(value: T): T { // <T> = 함수를 호출할 때 마다 타입이 결정됨 // 기본적으로 unknown
    return value;
}

let num2 = funcGeneric(10);
// 인수의 입력값에 따라서 반환값의 타입이 변겅됨
let str2 = funcGeneric("str");
// 인수의 입력값에 따라서 반환값의 타입이 변겅됨
let bool2 = funcGeneric(false);
// 인수의 입력값에 따라서 반환값의 타입이 변겅됨


// 튜플할당

let arr = funcGeneric<[number, number, number]>([1, 2, 3])

console.log(arr);
