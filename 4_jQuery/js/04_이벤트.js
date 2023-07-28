// 1. 이벤트 연결
// 1) on, off
// $('#area1').on('mouseenter', function(event) {
//     // 마우스가 올라갔을때
//     // 배경색상: beige, 텍스트:마우스가 올라감
//      $(event.target).css('background-color', 'beige').text('마우스가 올라감');
// });

// $('#area1').on('mouseleave', function(event) {
//      $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
// });

// 2개 같이 사용 가능
// $('#area1').on('mouseenter mouseleave', function(event) {
//     if(event.type === 'mouseenter'){
//             $(event.target).css('background-color', 'beige').text('마우스가 올라감');
//     } else if(event.type === 'mouseleave'){$(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
//     }
// });

// $('#area1').on('click', function(event){
//     $(event.target).css('background', 'white').text('').off('mouseenter mouseleave');
// });

// 3개 같이 사용 가능
$('#area1').on({
    mouseenter:function(event){
        $(event.target).css('background-color', 'beige').text('마우스가 올라감');
    },
    mouseleave:function(event){
        $(event.target).css('background-color', 'hotpink').text('마우스가 내려감');
    },
    click:function(event){
        $(event.target).css('background', 'white').text('').off('mouseenter mouseleave');
    }
});

// 2) one(한 번만 실행)
// 대량으로 데이터 불러올때 사용(한번더 불러오는걸 막기위해)
$('#area2').one('click', function(event) {
    alert('실행!');
});

// 2. 키보드 이벤트
// 1) keydown, keypress, keyup
// keydown: 키보드가 눌려질 때
// $('#textarea1').keydown(function(e) {
//     console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
// });
// // keypress: 글자가 입력될 때
// $('#textarea1').keypress(function(e) {
//     console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
// });
// // keyup: 키보드가 떼어질 때
// $('#textarea1').keyup(function(e) {
//     console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
// });

// keydown, keypress, keyup -> on 메소드로 한번에
$('#textarea1').on({
    keydown:function(e){
        console.log(`keydown / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keypress:function(e){
        console.log(`keypress / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    },
    keyup:function(e){
        console.log(`keyup / e.key : ${e.key}, e.keyCode : ${e.keyCode}`);
    }
});

// substring
console.log("Hello~".substring(0,1));

$('#textarea2').on('keyup', function(e) {
    console.log($(e.target).val());
    console.log($(e.target).val().length);

    // 현재 길이
    const currentLength = $(e.target).val().length;

    // 최대 길이
    const maxLength = parseInt($('#maxLength').text());

    if(currentLength > maxLength) {

        // console.log($(e.target).val().substring(0, maxLength));
        $(e.target).val($(e.target).val().substring(0, maxLength));
    } else {
        $('#counter').text(currentLength);
    }
});

$('#userId').on('keyup', function(e){
    console.log($(e.target).val());
    const regExp = /^[a-z][a-z0-9]{4,12}$/;
    const id = $(e.target).val();

    if(regExp.test(id)){
        $('#idCheck').text('사용 가능한 아이디입니다.').css('color', 'blue');
    } else if(id === ""){
        $('#idCheck').text('');
    } else {
        $('#idCheck').text('사용 불가능한 아이디입니다.').css('color', 'red');
    } 
});

// 3. trigger() 메소드
// let num = 0;
$('#area3').on('click', function() {
    let currentCount = parseInt($('#counter2').text());
    $('#counter2').text(++currentCount);
});

// area3에 건 click 이벤트를 쓰겠다(trigger)
$('#btn').on('click', function(){
    $('#area3').trigger('click');
});

// 내가 한 방식
// let count = 0;
// $('#area3').on('click', function(e){
//     $('#counter2').text(count+1);
//     count += 1;
// });

