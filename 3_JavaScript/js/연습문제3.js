const imgList = document.querySelectorAll('.main-image img');
const click = document.querySelector('.click');
const restart = document.querySelector('.restart');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');
let count = 0;

// click 눌렀을때 실행되는 함수
function change(event){

    // 횟수 카운트
    span.innerHTML = ++count;

    // 1~3까지 랜덤값 배열로 담기
    const srcArr = [Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1];


   for(let i = 0; i<imgList.length; i++){
        // 3가지 그림 랜덤으로 src 속성 바꾸기
        imgList[i].setAttribute('src', `../resources/spy${srcArr[i]}.jpg`);

        // 그림 3개 모두 일치할 경우
        if(srcArr[0]===srcArr[1]&&srcArr[1]==srcArr[2]) {
            result.innerHTML = "Congratulation!! Press restart to play again!!";
            
            // 클릭 비활성화
            click.setAttribute("disabled", "disabled");
            
        }
   }
   
}

// restart 눌렀을때 실행되는 함수
function reset(event){
   for(let i = 0; i<imgList.length; i++){
        imgList[i].setAttribute('src', `../resources/spy1.jpg`);
    }
    count = 0;
    result.innerHTML="";
    span.innerHTML = "";
    // 속성 삭제
    click.removeAttribute("disabled");
}

click.addEventListener('click', change);
restart.addEventListener('click', reset);