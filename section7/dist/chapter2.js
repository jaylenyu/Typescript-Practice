// map 메서드의 타입지정
const arr = [1, 2, 3];
const newArr = arr.map((el) => el * 2); // [2, 4, 6]
console.log(newArr);
// 입력값의 타입과 반환값의 타입이 다를 때
function map(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}
map(arr, (it) => it.toString());
// string[] 타입의 배열을 반환
// 결과 : ["1", "2", "3"]
let A = map(["hello", "hi"], el => el + 33);
console.log(A);
// foreach 메서드의 타입지정
let B = arr.forEach((el) => console.log(el));
console.log(B);
const arr2 = [1, 10, 100];
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
let C = forEach(arr2, (el) => {
    console.log(el); // number
});
console.log(C);
let D = forEach(["str1", "str2", "str3"], (el) => {
    el; // string
});
export {};
