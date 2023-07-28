// 타입 단언

type Person = {
    name: string,
    age: number
}

let person = {} as Person;
person.name = "이름";
person.age = 20;

type Dog = {
    name: string,
    age: number
}

let dog = {
    name: "복실이",
    age: 7,
    breed: "진도"
} as Dog


// 타입 단언의 규칙
// 단언식   값 as 단언
//        A as B
// A 가 B 의 슈퍼타입이거나 서브타입이어야 함

let num1 = 10 as never;
let num2 = 10 as unknown;

// const 단언

let num3 = 20 as const; // num3의 값은 20

let cat = {
    name: "참외",
    age: 1
} as const 
// readonly 읽기전용 프로퍼티가 되어 수정불가

// Non Null 단언
type Post = {
    title: string;
    author?: string; // ?는 선택적 프로퍼티
}

let post: Post = {
    title: "게시글",
    author: "복순"
}

const len: number = post.author!.length; 
// ! 를 붙여주면 옵셔널체이닝 앞 값이 null 혹은 undefined가 아니라고 ts컴파일러가 믿도록 만듦
