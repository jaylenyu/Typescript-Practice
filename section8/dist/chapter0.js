// 인덱스드 엑세스타입
// 객체타입으로 부터 특정 프로퍼티의 타입을 추출하여 변수에 정의할 수 있도록 도와주는 문법
;
const post = {
    title: "게시글",
    content: "글내용",
    author: {
        id: 1,
        name: "작성자",
        age: 18,
        location: "서울"
    }
};
function printAuthor(author) {
    console.log(`${author.name}은 ${author.id}번`); // Post[$$] $$에 들어올 수 있는 값은 타입만 명시할 수 있음   
}
const postList = {
    title: "게시글",
    content: "글내용",
    number: 1,
    author: {
        id: 1,
        name: "작성자",
        age: 18,
        location: "서울"
    }
};
function printNumber(author) {
    console.log(`${author.name}은 ${author.id}번`); // Post[$$] $$에 들어올 수 있는 값은 타입만 명시할 수 있음   
}
export {};
