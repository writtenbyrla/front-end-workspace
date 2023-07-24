window.addEventListener('scroll', function(){
    console.log(window.pageYOffset); // deprecated(사용X)
    console.log(window.scrollY);
    console.log(document.body.offsetHeight); // 스크롤 끝까지 내렸을때 높이
    console.log(window.innerHeight);
    // 스크롤 내렸을때 높이 차이
});

// const bar = document.querySelector('.progress-bar');
// function scrollbar () {
//     bar.
// }

// bar.addEventListener('scroll', scrollbar);
