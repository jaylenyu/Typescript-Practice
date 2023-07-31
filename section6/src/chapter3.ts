// interface와 class

interface CharacterClass { // interface에 담긴 프로퍼티들은 무조건 public
    name: string;
    age: number;
    skill(): void;
}

class Charactor implements CharacterClass { // implements = Charactor는 CharactorClass
    constructor (public name: string, public age: number) {
    }    
    skill() : void {
        console.log("skill");
    }
}