// 제네릭 클래스
class List {
    list;
    constructor(list) {
        this.list = list;
    }
    push(data) {
        this.list.push(data);
    }
    pop() {
        this.list.pop();
    }
    print() {
        console.log(this.list);
    }
}
const classList = new List([1, 2, 3, 4]);
classList.pop();
classList.pop();
classList.pop();
classList.push(10);
classList.print();
export {};
