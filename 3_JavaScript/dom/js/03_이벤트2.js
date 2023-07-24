// load : 모두 load
// DOMContentLoaded : 돔 형태만 load
// window.addEventListener('DOMContentLoaded', function(){
//     const h1 = document.querySelector('h1');
//     console.log(h1);
// });

const h1 = document.querySelector('h1');
// h1.addEventListener('click', function(){
//     h1.style.backgroundColor = "skyblue";
// });

// 마우스 올리기만 해도 색 바뀜
h1.addEventListener('mouseenter', function(){
    h1.style.backgroundColor = "skyblue";
})


const container = document.querySelector('.container');
let current;
const imgList = document.querySelectorAll('.container img');

// const img1 = document.querySelector('.container img:nth-child(1)');
// const img2 = document.querySelector('.container img:nth-child(2)');
// const img3 = document.querySelector('.container img:nth-child(3)');
// const img4 = document.querySelector('.container img:nth-child(4)');
// const img5 = document.querySelector('.container img:nth-child(5)');

// function hide(e){
//     if(current){
//         current.style.visibility = 'visible';
//     }

//     e.target.style.visibility = 'hidden';
//     // e.target.style.display = 'none';

//     current = e.target;
// }

function hide(event){ // 이벤트 객체
    if(event.target!==event.currentTarget){
        event.target.style.display='none';
    }
}

for(let i=0; i<imgList.length; i++){
    imgList[i].addEventListener('click', hide);
}

container.addEventListener('click', hide);

// imgList[0].addEventListener('click', hide);
// imgList[1].addEventListener('click', hide);
// imgList[2].addEventListener('click', hide);
// imgList[3].addEventListener('click', hide);
// imgList[4].addEventListener('click', hide);


