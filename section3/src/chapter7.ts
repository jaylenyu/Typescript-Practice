// 타입 좁히기
// 조건문 등을 이용하여 넓은 타입에서 좁은 타입으로 변환

// value가 number일때와 string일때 toFixed()와 toUpperCase()로 실행하기
// value가 Date일때 getTime()

function chapter7(value: number | string| Date ) {
    if (typeof value === 'number') {
        console.log(value.toFixed()) // value는 number
    }
    if (typeof value === 'string') {
        console.log(value.toUpperCase()) // value는 string
    }
    if (value instanceof Date) { // instanceof로 광범위한 범위에서 좁은 범위로 좁힘
        console.log(value.getTime())
    }
    value; // if문 외부에서는 union 타입으로 value는 number | string
}