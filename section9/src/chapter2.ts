// infer(ence)

type FuncA = () => string;

type FuncB = () => number;

type ReturnType<T> = T extends () => string ? string : never;
//== ReturnType<T> = FuncA extends () => string ? string : never;

type A = ReturnType<FuncA> // string;

type B = ReturnType<FuncB> // never;

type C = ReturnType<number>

// infer를 사용 할 경우 

type ReturnType2<U> = U extends infer R ? R : never; // 자동으로 추론함

type F = ReturnType2<FuncA> // string;

type G = ReturnType2<FuncB> // number;


// infer 사용예시

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 사용조건 : 1. T는 프로미스 타입이어야 한다.
//          2. 프로미스 타입의 결과값 타입을 반환해야 한다.

type PromiseA = PromiseUnpack<Promise<number>>; //number;

type PromiseB = PromiseUnpack<Promise<string>>; //string;
