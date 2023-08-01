// generic interface
let keyValue = {
    key: "key",
    value: 333
};
let numberMap1 = {
    key: 1,
    key2: 0,
    key3: 223
};
let stringMap = {
    key: "value",
};
function goToSchool(user) {
    if (user.profile.type !== "student") {
        console.log("잘 못 오셨습니다");
        return;
    }
    const school = user.profile.school;
    console.log(`${school}로 등교 완료`);
}
const developerUser = {
    name: "정인",
    profile: {
        type: "developer",
        skill: "typescript",
    },
};
const studentUser = {
    name: "냥이",
    profile: {
        type: "student",
        school: "",
    },
};
export {};
