// window.addEventListener('scroll', function(){
//     console.log(window.pageYOffset); // deprecated(사용X)
//     console.log(window.scrollY);
//     console.log(document.body.offsetHeight); // 스크롤 끝까지 내렸을때 높이
//     console.log(window.innerHeight);
//     // 스크롤 내렸을때 높이 차이
// });

let maxScrollValue;
const progressBar = document.querySelector('.progress-bar');

function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
    // 전체 스크롤 할 수 있는 범위 
    //     = 바디 전체 높이 - 윈도우 현재 창의 높이
}

window.addEventListener('scroll', function(){
    progressBar.style.width = (window.scrollY / maxScrollValue) * 100 + '%';
});

window.addEventListener('resize', resizeHandler);
resizeHandler();

// navigation click event
const nav = document.querySelector('nav');
let current;

function navHandler(e){

    if(current){
        current.style.backgroundColor = 'transparent';
        current.style.color='black';
    }
    
    if(e.target!==e.currentTarget) {
        e.target.style.backgroundColor = 'black';
        e.target.style.color = 'white';
        current = e.target;
    }

    // // 선택한 메뉴의 색상을 바꿈
    // e.target.style.backgroundColor = 'black';
    // e.target.style.color = 'white';
    
    // // 지금 선택한 메뉴를 current에 담음
    // current = e.target;
}

nav.addEventListener('click', navHandler);

// mouse wheel event
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');

let currentSection = section1;

window.addEventListener('wheel', function(event){
    if(event.deltaY > 0){ // 휠을 아래로 내린 경우
        if(currentSection === section1){
            this.window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        } else if(currentSection === section2){
            this.window.scrollTo({top: section3.offsetTop, behavior: 'smooth'});
            currentSection = section3;
        }
    } else { // 휠을 위로 올린 경우
        if(currentSection === section3){
            this.window.scrollTo({top: section2.offsetTop, behavior: 'smooth'});
            currentSection = section2;
        } else if(currentSection === section2){
            this.window.scrollTo({top: section1.offsetTop, behavior: 'smooth'});
            currentSection = section1;
        }
    }
});

// scroll - animation 살짝
window.addEventListener('scroll', function(){
    if(section2.getBoundingClientRect().top===0){
        section2.children[0].classList.add('text-animation');
    } else {
        section2.children[0].classList.remove('text-animation');
    }

});