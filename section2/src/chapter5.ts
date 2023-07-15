// enum type
// enum은 compile 결과 사라지지 않는다.

// enum number type
enum Role { 
    // ADMIN = 0, //10 //숫자를 지정해주지 않아도 자동으로 0번부터 지정됨.
    // USER = 1,  //11 //첫 번째를 10으로 지정하면, 자동으로 정수 오름차순으로 지정됨.
    // GUEST = 2, //12
    ADMIN,
    USER,
    GUEST,
}

// enum string type
enum Language {
    kroean = "ko",
    english = "en",
}

const user1 = {
    name: "jay",
    role: Role.ADMIN,
    language: Language.kroean,
}

const user2 = {
    name: "lee",
    role: Role.USER,
    language: Language.english,
}

const user3 = {
    name: "son",
    role: Role.GUEST,
}

console.log(user1, user2, user3)


