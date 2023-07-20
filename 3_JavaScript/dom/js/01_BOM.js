/* open */
function btn1() {
    // window.open('https://naver.com');
    window.open("https://naver.com", "네이버", "width=500, height=600, resizable=no, location=no, menubar=no, scrollbars=no, status=no, toolbar=no");
}

/* setTimeout */
function btn2() {
    let newWindow = open(); // window 생략
    newWindow.alert('3초 후에 페이지 종료!');
    setTimeout(() => {
        newWindow.close(); // 페이지 종료 함수
    }, 3000); // (화살표 함수, 시간)
}

/* setInterval */
function btn3() {
    let second = 0;
    setInterval(() => {
        console.log(`${++second}초!`)
    }, 1000); // 1초마다(1000)

}

function btn4(){
    for(const key in location){
        console.log(`key: ${key}, value: ${location[key]}`);
    }
}

function btn5() {
    for(const key in navigator){
        console.log(`key: ${key}, value: ${navigator[key]}`);
    }
}

function btn6() {
    for(const key in screen){
        console.log(`key: ${key}, value: ${screen[key]}`);
    }
}

