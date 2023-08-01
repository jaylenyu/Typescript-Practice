// 템플릿 리터럴 타입

type Color = "red" | "balck" | "green";

type Animal = "dog" | "cat" | "chicken";

type ColoredAnimal = `${Color}-${Animal}`

// 문자열로 여러가지 경우의 수를 표현해야 할 때 사용.
// 모든 경우의 수를 유니온타입으로 정해줌