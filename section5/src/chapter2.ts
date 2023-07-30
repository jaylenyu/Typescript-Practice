// 선언합침

interface Person {
    name: string;
}

interface Person {
    // name: number;  error
    // name: "literal"; error 
    // 프로퍼티는 같은 타입으로 작성해야함
    color: string;
}

let person: Person = { // interface 선언이 자동으로 합쳐짐
    name: "",
    color: "",
}

interface Developer extends Person {
    name: "literal"; // 타입을 상속받는 경우에는 literal을 작성 가능
    // name: 22; error 그러나 타입은 맞춰줘야함
    color: "";
}

// 모듈보강시에 자주 사용함
// 라이브러리를 사용할 때, 이미 작성되어 있는 interface를 선언합침의 기능을 이용하여 custom하는 것

//라이브러리 예시
interface library {
    name: string;
    age: number;
}


interface library { // 추가로 코드를 작성하여 interface 선언합침을 유도하여 custom함
    color: string;
}

