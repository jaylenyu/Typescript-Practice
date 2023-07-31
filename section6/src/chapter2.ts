// 접근제어자
// 클래스에 접근할 때, 해당 클래스 내부에 접근을 제어하는 범위를 설정하는 문법
// public, private, protect

class Employee {
    name; // 아무것도 작성하지 않으면 기본적으로 public으로 설정됨.
    // public name // public을 명시적으로 작성 한 부분
    private age;
    protected position;

    constructor (name: string, age: number, position: string) { // 일반적으로 생성자 인자에 타입을 할당.
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log("work");
    }
}

const employee = new Employee("name", 22, "position")
employee.name = "this";
// employee.age = 33; age는 private이므로 class외부에서 접근이 불가능함
// employee.position = "Front"; position의 경우 파생클래스에서 접근이 가능하며 class외부에선 접근이 불가능

class Employee2 extends Employee {
    protected office

    constructor(name: string, age: number, position: string, office: string) {
        super(name, age, position)
        this.office = office
    }
    work() {
        console.log("work")
    }
}

const employee2 = new Employee2("정인", 44, "Backend", "office");