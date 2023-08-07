// Pick<T, K>
// 객체 타입으로 부터 특정 프로퍼티만 딱 골라내는 타입

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

const legacyPost: Pick<Post, "title" | "content"> = {
    title: "예전 게시글",
    content: "예전 게시글 내용"
}

type Pick<T, K extends keyof T> = { // 타입변수 K에 할당할 수 있는 타입은 무족너 T로 들어오는 객체타입에 키값을 추출한 유니온타입의 서브타입만 들어올 수 있다
    [key in K]: T[key];
}


// Omit<T, K>
// 객체타입으로 부터 특정 프로퍼티를 제거하는 타입

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
//== T: Post, K: "title"
//== Pick<Post, Exclude<keyof Post, "title">>
//== Pick<Post, Exclude<"title" | "content" | "tags" | "thumbnailURL", "title">>
//== Pick<Post, "content" | "tags" | "thumbnailURL">

const noTitlePost: Omit<Post, "title"> = { // Post 객체로 부터 title 프로퍼티만 뺌
    content:"제곧내",
    tags:[],
    thumbnailURL: 'https://www.naver.com'
}


// Record
// 객체타입을 만들어주는 유틸리티타입

type Thumbnail = { // 중복이 심한 코드
    large: {
      url: string;
    };
    medium: {
      url: string;
    };
    small: {
      url: string;
    };
};

type ThumbnailRecord = Record<"large" | "medium" | "small", { url: string }>; // 유지보수가 용이하게 Record로 작성가능

type Record<K extends keyof any, V> = {[key in K]: V;};