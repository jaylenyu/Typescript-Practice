// object literal type
let object1: {
    id: number,
    name: string,
} = {
    id: 1,
    name: "유정인",
}

console.log(object1.id)
console.log(object1.name)

// optional property // 선택적 프로퍼티
let object2: {
    id?: number, // id가 없어도 허용. 그러나 있을 시 number이어야 함
    name: string,
} = {
    name: "dog"
}

console.log(object2);

// Readonly // 읽기 전용
const config: {
    readonly apiKey: string;
} = {
    apiKey: "UYEWFVEIABFASDJK"
}

console.log(config)

// config.apiKey = "ASFASFYIBIASD" error 값 변경 불가
