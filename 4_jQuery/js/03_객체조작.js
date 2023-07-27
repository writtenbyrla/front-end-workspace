// 1. Content 설정
// 1) html()
console.log($('#content1').html());

// #content2에 #content1의 내용을 대입
$('#content2').html($('#content1').html());
console.log($('#content2').html());

// 속성 변경: attr, prop (리턴 방식의 차이가 있음)
// #content1의 a태그 속성 herf에 https://naver.com 대입
$('#content1 > a').attr('href', 'https://naver.com');


// #content2의 a태그 속성 herf에 https://naver.com 대입
$('#content2').find('a').prop('href', 'https://naver.com')

// 선택된 첫번째 요소의 텍스트 내용 리턴(html)
console.log($('.content').html());
$('.content').html('zzzzzzzz');

// 전체 요소 리턴시 콜백 함수 사용(html)
$('.content').html(function(index, content) {
    console.log(index, content);
    return `<h4>인덱스 ${index}, 내용: ${content}</h4>`
});

// 1. Content 설정
// 2) text()

// a 태그 제외 텍스트만 복사됨
$('#content4').text($('#content3').text());
console.log($('#content4').text());

// 텍스트로 인식함, html일 경우 strong 적용됨
$('#content4').text('<strong>Hello~</strong>');
// $('#content4').html('<strong>Hello~</strong>');

// 선택된 전체 요소의 텍스트 내용 리턴(text)
console.log($('.content2').text());
$('.content2').text(function(index, content) {
    console.log(index, content);
    return `<h4>인덱스: ${index}, 내용: ${content}</h4>`
});

// 요소 추가
// 1) 자바 스크립트와 제이쿼리
// 자바스크립트 방식
const p = document.createElement('p');
p.innerHTML = '자바스크립트 추가';
document.querySelector('#area1').appendChild(p); 

// 제이쿼리 방식
const p2 = $('<p>').text('제이쿼리로 추가');
$('#area1').append(p2);

// 2) 요소 추가 1
$('#add1').append('<span>B</span>'); // AB(뒤에 추가)
$('#add2').prepend('<span>B</span>'); // BA(앞에 추가)
$('#add3').after('<span>B</span>'); // 형제 요소로 뒤에 추가
$('#add4').before('<span>B</span>'); // 형제 요소로 앞에 추가

// 3) 요소 추가 2
$('<span>B</span>').appendTo('#add5'); 
$('<span>B</span>').prependTo('#add6'); 
$('<span>B</span>').insertAfter('#add7');  
$('<span>B</span>').insertBefore('#add8'); 

// 3. 요소 복제
$('#item1').hover(
    // (event) => { // mouseenter
    //     console.log(event.type);
    //     $(event.target).addClass('bg-hotpink');
    // },
    // (event) => { // mouseleave
    //     console.log(event.type);
    //     $(event.target).removeClass('bg-hotpink');
    // }

    (event) => { 
        console.log(event.type);
        $(event.target).toggleClass('bg-hotpink')
    }
);

// 버튼 클릭 시 요소 복제
$('#btn1').click(function() {
    // clone(true)일 경우 이벤트 같이 복제됨
    const item = $('#item1').clone(true);
    $('#clone-result').append(item);
});

// 4. 요소 제거
$('#item2').hover(
    (event) => $(event.target).toggleClass('bg-hotpink')
);
// 1) remove(이벤트는 삭제됨)
// remove 버튼 클릭시 #item2를 remove로 제거 후 #remove-result에 리턴받은 값 출력
$('#remove').click(function() {
    const item = $('#item2').remove();
    $('#remove-result').append(item);
})

// 2) detach(이벤트는 삭제안됨)
// detach 버튼 클릭 시 #item2를 detach로 제거 후 #remove-result에 리턴받은 값 출력
$('#detach').click(function() {
    const item = $('#item2').detach();
    $('#remove-result').append(item);
})

// 3) empty
// empty 버튼 클릭 시 #remove-test를 비워버림
$('#empty').click(function() {
    $('#remove-test').empty();
})

// 5. 배열
const array = [
    {name: '구글', link: 'https://google.com'},
    {name: '네이버', link: 'https://naver.com'},
    {name: '다음', link: 'https://daum.net'}
];

// 자바 스크립트
array.forEach(function(element, index, origin) {
    console.log(element, index, origin);
});

// 제이쿼리
$.each(array, function(index, element) {
    console.log(index, element);
});

$(array).each(function(index, element) {
    console.log(index, element);
});

// #each-test에 배열의 값들을 a링크로 href에는 link, content 부분에는 name을 사용해서 출력
$('#each-test').append(array);

$(array).each(function(index, element) {
    $('#each-test').append(`<a href="${element.link}">${element.name}</a><br>`);
});