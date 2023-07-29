// 서로소 유니온 : 교집합이 없는 타입들로만 만들어진 유니온타입

type Admin = {
    name: string;
    kickCount: number;
    tag: "ADMIN";
}

type Member = {
    name: string;
    point: number;
    tag: "MEMBER";
}

type Guest = {
    name: string;
    visitCount: string;
    tag: "GUEST";
}

type User = Admin | Member | Guest;

function chapter8(user: User) {
    if ("kickCount" in user) {  // in 은 타입가드
        console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하셨습니다.`)
    }
    if ("point" in user) {
        console.log(`${user.name}님 현재까지 ${user.point}포인트 쌓았습니다.`)
    }
    if ("visitCount" in user) {
        console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
    }
} 
// 위 작성 코드보다 더 직관적인 코드로 작성해보자
// tag라는 프로퍼티에 string literal 타입을 추가하여 교집합관계를 없애 서로소관계로 만듦

function typescript(user: User) {
    switch (user.tag) {

        case "ADMIN":{
            console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴하셨습니다.`)
            }
            break;

        case "MEMBER":{
            console.log(`${user.name}님 현재까지 ${user.point}포인트 쌓았습니다.`)
            }
            break;

        case "GUEST": {
            console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`)
            }
            break;
    }
}

// 사용 가능한 코드 예시

type LoadingTask = {
    state: "LOADING";
}

type FailedTask = {
    state: "FAILED";
    error: {
        message: string;
    }
}

type SuccessTask = {
    state: "SUCCESS";
    data: {
        message: string;
    }
}

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function ProcessResult(task: AsyncTask) {
    switch (task.state) {
        case "LOADING": {
            console.log("로딩 중")
        }
        break;
        case "FAILED": {
            console.log(`에러 발생 : ${task.error.message}`)
        }
        break;
        case "SUCCESS": {
            console.log(`전송 완료 : ${task.data.message}`)
        }
        break;
    }
}


// type AsyncTask = {
//     state: "LOADING" | "FAILED" | "SUCCESS";
//     error?: { // state가 loading일때는 error와 response가 없어야 하기 때문에 선택적 프로퍼티 ? 적용
//         message: string;
//     }
//     response?: {
//         data: string;
//     }
// }

// let loading: AsyncTask = {
//     state: "LOADING",
// }

// let failed: AsyncTask = {
//     state: "FAILED",
//     error: {
//         message: "오류 발생"
//     },
// }

// let success: AsyncTask = {
//     state: "SUCCESS",
//     response: {
//         data: "데이터 전송 완료"
//     }
// }