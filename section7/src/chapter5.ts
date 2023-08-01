// promise generic

const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res(20) // 성공 resolve
        // rej("실패")
    }, 1000)
})

promise.then((response) => {
    console.log(response)
})

promise.catch((err) => {
    if (typeof err === "string") {
        console.log(err);
    }
})


// promise를 반환하는 함수의 타입을 정의 

interface Post {
    id: number;
    title: string;
    content: string;
}

function patchPost() {
    return new Promise<Post>((res, rej) => {
        setTimeout(() => {
            res({
                id: 1,
                title: "제목",
                content: "내용"
            })
        }, 2000)
    })
}

const postRequest = patchPost();

postRequest.then((post) => {
    console.log(post);
    
})
