// keyof 연산자
function getKey(person, key) {
    return person[key];
}
const person = {
    name: "정인",
    age: 22,
};
console.log(getKey(person, "name"));
export {};
