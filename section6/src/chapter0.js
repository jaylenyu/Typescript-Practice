// class

class Developer { // 반복적으로 생성해야 하는 객체가 있을 떄, class로 같은 구성의 객체를 쉽게 만들 수 있음
    // 필드
    name;
    grade;
    age;
    
    // 생성자
    constructor (name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    } 

    // 메서드
    develop() {
        console.log(`${this.name} 입니다.`)
    }
}

let front = new Developer("정인", "A", 22);
//          new = 새로운 객체를 만들어라 // () 는 constructor를 호출
console.log(front) // Developer { name: '정인', grade: 'A', age: 22 }
console.log(front.develop());

// 위와 같이 class를 이용하여 만든 객체를 instace라고 부른다.


// class 상속
// 이미 만들어진 클래스에 다른 필드 혹은 메서드를 추가하여 파생된 class를 생성하고자 할 때 사용

class FrontDeveoloper extends Developer{
    // 필드
    skill;

    // 생성자
    constructor (name, grade, age, skill) { // 매개변수는 지우면 안됨
        super(name, grade, age) // 부모클래스의 생성자를 호출 그리고 super() 키워드를 반드시 작성 해주어야 함
        this.skill = skill;
    }

    // 메서드
    developSkill() {
        console.log(`${this.skill} 을 잘 합니다.`)
    }
}

let frontDeveloper = new FrontDeveoloper("정인" ,"B", 33, "React")
console.log(frontDeveloper);
console.log(frontDeveloper.developSkill());