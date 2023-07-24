const imgList = document.querySelectorAll('.main-image img');
const click = document.querySelector('.click');
const restart = document.querySelector('.restart');
const result = document.querySelector('.main-result');
const span = document.querySelector('.click span');
let count = 0;

function change(event){
    span.innerHTML = ++count;

    const srcArr = [Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1, Math.floor(Math.random()*3)+1];

   for(let i = 0; i<imgList.length; i++){
        imgList[i].setAttribute('src', `../resources/spy${srcArr[i]}.jpg`);
        if(srcArr[0]===srcArr[1]&&srcArr[1]==srcArr[2]) {
            result.innerHTML = "Congratulation!! Press restart to play again!!";
            // 클릭 비활성화
            click.setAttribute("disabled", "disabled");
            
        }
   }
   
}

function reset(event){
   for(let i = 0; i<imgList.length; i++){
        imgList[i].setAttribute('src', `../resources/spy1.jpg`);
    }
    count = 0;
    result.innerHTML="";
    span.innerHTML = "";
    click.removeAttribute("disabled");
}

click.addEventListener('click', change);
restart.addEventListener('click', reset);