// unknown type

function unknownExam() {
    //업캐스팅
    let a: unknown = 10;
    let b: unknown = "string";
    let c: unknown = false;
    let d: unknown = {};
    let e: unknown = null;
    let f: unknown = undefined;

    //다운캐스팅 error
    let unknownVar: unknown;
    // let num: number = unknownVar; 
    // let str: string = unknownVar;
}

// never type 어떠한 값도 가지면 안되는 변수의 타입으로 활용

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    };
    //업캐스팅
    let num: number = neverFunc();
    let str: string = neverFunc();
    let boolean: boolean = neverFunc();

    //다운캐스팅 error
    // let never1: never = 10;
    // let never2: never = "string";
}

// void type
function voidExam() {
    function voidFunc() {
        console.log("VOID");
        return undefined; // void는 undefined의 슈퍼타입이기 때문에 undefined를 반환가능
    }

    let voidVar: void = undefined;
}

// any type
function anyExam() {
    let unknown: unknown;
    let any: any;
    let undefined: undefined;
    let never: never;

    let anyVar = unknown; // any type에 한정해서 다운캐스팅 가능
    let anyVar2 = undefined; // any type은 타입계층도를 무시하기 때문에 가능한 사용 지양
    // let anyVar3 = never; never타입은 순수한 공집합이기 때문에 어떤 타입도 다운캐스팅 불가
}