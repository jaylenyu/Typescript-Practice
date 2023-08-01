// generic interface

interface KeyValue<K, V> {
    key: K;
    value: V;
}

let keyValue: KeyValue<string, number> = { // generic interface함수를 사용할 때 꼭 꺽쇠<>에 타입을 작성해주어야 함
    key: "key",
    value: 333
}

// 인덱스 시그니쳐
interface numberMap {
    [key: string] : number;
}

let numberMap1: numberMap = {
    key: 1,
    key2: 0,
    key3: 223
}

interface Map<V> {
    [key: string] : V;
}

let stringMap: Map<string> = {
    key: "value",
}

// generic interface 활용 예시

interface Student {
    type: "student";
    school: string;
}
  
interface Developer {
    type: "developer";
    skill: string;
}
  
interface User<T> {
    name: string;
    profile: T
}

function goToSchool(user: User<Student>) {
    if (user.profile.type !== "student") {
      console.log("잘 못 오셨습니다");
      return;
    }
  
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
  
const developerUser: User<Developer> = {
    name: "정인",
    profile: {
      type: "developer",
      skill: "typescript",
    },
};
  
const studentUser: User<Student> = {
    name: "냥이",
    profile: {
      type: "student",
      school: "",
    },
};
