// Partial, Required, Readonly


// Partial<T>
// 모두 선택적 프로퍼티 적용을 하고 싶을 때
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string; // URL만 선택적 프로퍼티 적용.
}

type Partial<T> = { // Partial 구현
    [key in keyof T]?: T[key];
}

const draft: Partial<Post> = { //partial을 사용하면 모두 선택적 프로퍼티로 변한다.
  title: "제목 나중에 짓자",
  content: "초안...",
};


// Required<T>
// 특정객체 타입에 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입

type Required<T> = {
    [key in keyof T]-?: T[key]
}// -? 를 입력하면 선택적프로퍼티를 모두 빼겠다는 의미 = 모든 프로퍼티가 필요해진다는 의미와 같다

const withThumnailPost : Required<Post> = {
    title:"제목",
    tags: ["type"],
    content: "내용",
    thumbnailURL: 'https://asddds'
}


// Readonly<T>
// 도든 프로퍼티를 읽기전용 프로퍼티로 바꿔줌

type Readonly<T> ={
    readonly [key in keyof T]: T[key]
}

const readonlyPost : Readonly<Post> = {
    title: '보호된 게시글',
    tags: [],
    content: '보호된 내용',
    thumbnailURL: 'https://www.abbs'
}

// readonlyPost.title = '보호해제' // error 읽기전용 속성이므로 변경 불가

