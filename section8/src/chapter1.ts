// keyof 연산자

interface Person {
    name: string;
    age: number;
}

function getKey(person: Person, key: keyof Person) {// Person의 프로퍼티의 타입을 유니온타입으로 추출해줌
    return person[key]
}

const person: Person = {
    name: "정인",
    age: 22,
};

console.log(getKey(person, "name"));

