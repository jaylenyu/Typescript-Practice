// 조건부 타입

type stringNumberSwitch<T> = T extends number ? number : string;
// 슈퍼타입과 서브타입에 따라 타입의 조건을 삼항연산자로 걸어두어 타입을 지정하게 됨

let varA: stringNumberSwitch<number>;

let varB: stringNumberSwitch<string>;


// 제네릭과 조건부 타입
function removeSpaces(text: string | undefined | null) {
//   return text.replaceAll(" ", ""); // text가 string이 아닐 수 있음
  if (typeof text === "string") { //타입을 좁혀주면 해결이 가능하지만 result가 test | undefined라고 나옴
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result = removeSpaces("hi im winterlood");


// 위 코드보다 나은 방법
function removeSpaces2<T>(text: T): T extends string ? string : undefined {
  if (typeof text === "string") {
    return text.replaceAll(" ", "") as any;
  } else {
    return undefined as any // as any 를 사용하여도 되지만 첫번째 return에서 string 이 아닌 타입을 반환해도 error를 감지하지 못함
  }
} 

let result1 = removeSpaces("hi im winterlood"); // string

let result2 = removeSpaces(undefined); // undefined


// 함수 오버로딩으로 작성
// 타입 단언보다 함수 오버로딩으로 작성함
// 오버로드 시그니쳐의 조건부 타입은 구현 시그니쳐 내부에서 추론이 가능하기 때문
function removeSpaces3<T>(text: T): T extends string ? string : undefined;
function removeSpaces3(text: any) {
  if (typeof text === "string") {
    return text.replaceAll(" ", "");
  } else {
    return undefined;
  }
}

let result3 = removeSpaces3("hi im winterlood");
// string

let result4 = removeSpaces3(undefined);
// undefined