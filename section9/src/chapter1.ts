// 분산적인 조건

type StringNumberSwitch<T> = T extends number ? number : string;

let a: StringNumberSwitch<number>;

let b: StringNumberSwitch<string>;

let c: StringNumberSwitch<number | string>;


// 특정 조건을 제외하는 

type Exclude<T, U> = T extends U ? never : T;

let A: Exclude<number | string | boolean, string>;
