// 사용자 정의 타입 가드

type Dog = {
    name: string;
    isBark: boolean;
}

type Cat = {
    name: string;
    isScratch: boolean;
}

type Animal = Dog | Cat;

function warning1(animal: Animal) { //이 함수에서는 프로퍼티의 값을 수정하게 되면
    if ("isBark" in animal) {      //조건문 안에 isBark도 함께 수정하여야 하기 때문에 error의 소지가 있고 무엇보다 가독성이 떨어진다.
      console.log(animal.isBark ? "짖습니다" : "안짖어요");
    } else if ("isScratch" in animal) {
      console.log(animal.isScratch ? "할큅니다" : "안할퀴어요");
    }
}

// Dog 타입인지 확인하는 타입 가드
function isDog(animal: Animal): animal is Dog {
  return (animal as Dog).isBark !== undefined;
}

// Cat 타입인지 확인하는 타입가드
function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isScratch !== undefined;
}