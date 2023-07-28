// 객체타입들은 프로퍼티를 기준으로 슈퍼타입과 서브타입을 나눔

type Animal = {
    name: string,
    color: string
}

type Dog = {
    name: string,
    color: string,
    breed: string
}

let animal: Animal = {
    name: "쌩쥐",
    color: "gray"
}

let dog: Dog = {
    name: "복돌이",
    color: "black",
    breed: "진도"
}

animal = dog // animal이 dog의 슈퍼타입
// dog = animal // dog은 animal의 서브타입이라서 error

// 초과 프로퍼티 검사

type Book = {
    name: string,
    price: number
}

type ProgrammingBook = {
    name: string,
    price: number,
    skill: string
}

let book: Book = {
    name: "react",
    price: 13000
}

let programmingBook: ProgrammingBook = {
    name: "program",
    price: 15000,
    skill: "react"
}