// interface 확장

type Animal = {
    name: string;
    color: string;
}

interface Dog extends Animal {
    // name: string;
    // color: string; 
    isBark: boolean; // Dog은 Animal을 상속받기 때문에 확장할 것만 적어줌
}

let dog: Dog = {
    name: "HotDog",
    color: "red",
    isBark: true,
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface CatDog extends Cat, Dog { // 다중 interface

}

let catdog: CatDog = {
    name: "cat",
    color: "blue",
    isBark: true,
    isScratch: true
}