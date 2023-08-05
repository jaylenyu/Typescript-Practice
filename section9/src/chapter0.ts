// 조건부 타입

type stringNumberSwitch<T> = T extends number ? number : string;
// 슈퍼타입과 서브타입에 따라 타입의 조건을 삼항연산자로 걸어두어 타입을 지정하게 됨

let varA: stringNumberSwitch<number>;

let varB: stringNumberSwitch<string>;


// 제네릭과 조건부 타입

