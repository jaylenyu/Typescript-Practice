// 인덱스드 엑세스타입
// 객체타입으로 부터 특정 프로퍼티의 타입을 추출하여 변수에 정의할 수 있도록 도와주는 문법

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
        age: number;
        location: string;
    };
};

const post: Post = {
    title: "게시글",
    content: "글내용",
    author: {
        id: 1,
        name: "작성자",
        age: 18,
        location: "서울"
    }
}

function printAuthor(author: Post["author"]) { // author의 프로퍼티의 타입이 수정되거나 삭제되어도 즉시 적용됨
    console.log(`${author.name}은 ${author.id}번`); // Post[$$] $$에 들어올 수 있는 값은 타입만 명시할 수 있음   
}

// Post타입을 배열로 여러개 저장할 때
type PostList = { // type으로 지정
    title: string;
    content: string;
    number: number;
    author: {
        id: number;
        name: string;
        age: number;
        location: string;
    };
}[];

const postList: PostList[number] = {
    title: "게시글",
    content: "글내용",
    number: 1,
    author: {
        id: 1,
        name: "작성자",
        age: 18,
        location: "서울"
    }
}

function printNumber(author: PostList[number]["author"]) {
    console.log(`${author.name}은 ${author.id}번`); // Post[$$] $$에 들어올 수 있는 값은 타입만 명시할 수 있음   
}

// 튜플타입

type Tup = [number, string, boolean];

type tup0 = Tup[0];

type tup1 = Tup[1];

type tup2 = Tup[2];

// type tup3 = Tup[3]; error [3]은 없기 때문

type tupNum = Tup[number];