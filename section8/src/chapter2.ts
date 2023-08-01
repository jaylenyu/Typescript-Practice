// 맵드타입

interface User {
    id: number;
    name: string;
    age: number;
}

type PartialUser = {
    [key in "id" | "name" | "age"]?: User[key];
    // 어떤 타입의 키가 있는지 정의하는 곳 ?:// 프로퍼티의 키들이 어떤 값을 가질건지 정의하는 곳
    // ?: 앞서 작성된 키들의 선택적 프로퍼티를 가능하게 해줌
}

function fetchUser(): User {

    return {
        id: 1,
        name: "정인",
        age: 22,
    }
}

function updateUser(user: User) {

}

updateUser({
    id: 1,
    name: "정인",
    age: 24
})