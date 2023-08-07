// 분산적인 조건부 타입

type StringNumberSwitch<T> = T extends number ? number : string;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;
// 조건부 타입에 유니온타입을 넣게 되면 일반적인 조건부 타입에서 분산적인 조건부타입으로 업그레이드됨
// 위 코드로 타입을 T에 전달 하면 
// StringNumberSwitch<string> | StringNumberSwitch<number>
// 형태의 유니온타입으로 묶임


// 특정 조건을 제외하는 Exclude

type Exclude<T, U> = T extends U ? never : T;

let A: Exclude<number | string | boolean, string>;

// Exclude<number, string>
// Exclude<string, string>
// Exclude<boolean, string>

// 분산적인 조건부 타입을 이용해서 특정 유니온 타입으로 부터 특정 타입만 제거한 유니온타입을 얻어내는 것이 가능함

// 특정 조건만 도출되는 Extract
type Extract<T, U> = T extends U ? T : never;

let B: Extract<number | string | boolean, string>;
