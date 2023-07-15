// type alias // 타입 별칭

import { type } from "os";

type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user1: User = {
    id: 1,
    name: "jay",
    nickname: "len",
    birth: "1020",
    bio: "hello",
    location: "London"
}

let user2: User = {
    id: 1,
    name: "lee",
    nickname: "kangin",
    birth: "1030",
    bio: "hello",
    location: "PSG"
}

console.log(user1);
console.log(user2);


// index signature

type contryCodesType = {
    [key : string] : string
}

let contryCodes:contryCodesType = {
    Korea: "ROK",
    UnitedKingdom: "UK",
    France: "FRA",
    Sweden: "SWE",
}

