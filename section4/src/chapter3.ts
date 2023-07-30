//하나의 함수를 매개변수의 타입이나 개수에 따라 
//여러 버젼으로 작성할 수 있도록 만드는 것

//오버로드 시그니쳐
//구현부 없이 타입을 먼저 작성해줌
function func(a: number) : void;
function func(a: number, b: number, c: number) : void;


// Ver1. 매개변수가 1개일 때에는 매개변수에 20을 곱한 값을 출력
// Ver2. 매개변수가 3개일 때에는 모든 매개변수를 더한 값을 출력
 
function func(a:number, b?: number, c?: number) {
    if (typeof b === "number" && typeof c === "number") {
        console.log(a + b + c);
    } else {
        console.log(a * 20);
    }
}

// func(); error
func(1);
// func(2, 3); error
func(1, 2, 3);
