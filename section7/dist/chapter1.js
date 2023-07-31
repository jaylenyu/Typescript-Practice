// 가변 타입이 2개 이상인 경우
function func(a, b) {
    return [b, a];
}
const [a, b] = func(20, "wip");
console.log([a, b]);
// 복잡한 사례
function returnFirstValue(data) {
    return data[0];
}
let num = returnFirstValue([77, 3, 2]);
console.log(num);
let str = returnFirstValue(["return", 88, 9]);
console.log(str);
// length가 있는 값들은 return을 할 수 있게 만드는 사례
function returnLength(data) {
    return data.length;
}
// let A = returnLength(10); // error
let B = returnLength([1, 2, 3]); // 3
let C = returnLength({ length: 10 }); // 10
let D = returnLength("String"); // 6
console.log(C, B, D);
export {};
