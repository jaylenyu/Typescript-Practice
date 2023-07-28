// 대수타입
// 여러개의 타입을 합집합으로 만들어낸 타입
// 합집합타입과 교집합타입이 존재함

let a: string | number | {} | boolean | null | undefined; // 타입을 여러개 지정 가능
a = 1;
a = "string";
a = {};

let arr:(number | string | boolean)[] = [10, "string", true]; // 타입을 순서대로 여러개 지정 가능


type Dog = {
    name: string,
    color: string
}

type Person = {
    name: string,
    language: string
}

// 1. 합집합 : Union타입

type Union1 = Dog | Person;

let union1: Union1 = {
    name: "",
    color: ""
}
let union2: Union1 = {
    name: "",
    language: ""
}
let union3: Union1 = {
    name: "",
    color: "",
    language: ""
}
// let union4: Union1 = { name프로퍼티만 있는 union4는 Dog타입과 Person타입 모두 포함되지 않음
//     name: ""
// }


// 2. 교집합 - Interscetion타입

let variable: number & string;

type Intersection = Dog & Person

let intersection: Intersection = { // 모든  프로퍼티를 모두 포함하여야 함
    name: "",
    color: "",
    language: ""
}