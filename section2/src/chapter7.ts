// void
// 아무것도 없음

const func1 = ():void => {
    console.log("console");
}
func1();

let a: void
// a = 10; error
a = undefined;
console.log(a); //undefined

const func2 = ():string => {
    return "hello"
}
func2();

// never
// 불가능함, 모순을 의미

const func3 = ():never => {
    while (true) {} // 반환값 없이 무한 루프를 도는 함수
}
console.log(func3);

const func4 = ():never => {
    throw new Error();
}
console.log(func4);

let b: never; // 아무 값도 담을 수 없음
// b = 10 error