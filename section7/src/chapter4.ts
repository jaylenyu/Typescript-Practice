// 제네릭 클래스


class List<T> {
    constructor(private list : T[]) {

    }

    push(data: T) {
        this.list.push(data)
    }

    pop() {
        this.list.pop()
    }

    print() {
        console.log(this.list);   
    }
}

const classList = new List([1, 2, 3, 4]);
// 제네릭 인터페이스와 제네릭 타입과는 다르게 생성자의 인수로 저장하는 값에 따라 타입을 추론함
classList.pop()
classList.pop()
classList.pop()

classList.push(10)
classList.print()
