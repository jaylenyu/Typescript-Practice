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

book = programmingBook;
// programmingBook = book // book은 programmingBook의 슈퍼타입

let Book2: Book = {
    name: "program",
    price: 15000,
    // skill: "react"
}
// 변수를 초기화할 때, 초기화하는 값으로 객체리터럴을 사용하면 발동하는 검사
// 실제 타입에는 정해놓지 않은 초과되는 프로퍼티를 작성하면 안되도록 막음
// 주석처리하거나 삭제하여 객체프로퍼티에 지정된 타입만 쓸 수 있도록 해야함 