// typescript의 class

class Employee {
    // 필드
    name;
    age;
    position;
    // name: string = "" 필드에 직접 타입을 할당도 가능함

    // 생성자
    constructor (name: string, age: number, position: string) { // 일반적으로 생성자 인자에 타입을 할당.
        this.name = name;
        this.age = age;
        this.position = position;
    }

    // 메서드
    work() {
        console.log("work");
    }
}

const employee = new Employee("정인", 25, "front")
console.log(employee);

const employee2: Employee = { // class 인스턴스 그 자체를 type으로 설정 가능
    name: "미스",
    age: 23,
    position: "backend",
    work() {}
    // type으로 받으면 해당 class에 포함된 필드와 메서드가 모두 있어야함
}


class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber;

    // 생성자
    constructor (name: string, age: number, position: string, officeNumber: number){
        super(name, age, position);
        this.officeNumber = officeNumber
    }
}
