// interface

interface Person {
    readonly name: string;
    age?: number;
    sayHi(): void; // 함수타입보단 호출시그니쳐를 이용하는 것이 확장성에 좋음
    sayHi(a: number, b: number): void; // 다음과 같이 오버로드 시그니쳐를 활용가능
}

const person: Person = {
    name: "수박",
    sayHi: function() {
        console.log("Hi")
    }
}

person.sayHi(1, 2);
person.sayHi();
