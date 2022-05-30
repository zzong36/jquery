$(document).ready(function(){
    // $('h1').show(3000)
    // $('h1').slideUp(1000)
    
    // 3초 동안 "Hello JQUERY"라는 문장을 보인 후 글자색을 파란색으로 
    // 변경한 후 슬라이드 효과로 올라갔다 내려갔다를 수행하자
    // complete후에 보이기 위해 콜백 함수 호출해야 함
     // 여기까지 수행한 후 배경색을 노란색, 글자색은 빨간색 변경
    $('h1').show(3000, function(){
        $(this).css('color', 'blue');
        $(this).slideUp(1000).slideDown(1000, function(){
            // 여러 css를 적용하기 위해서는? JSON 형태로 쓸 수 있다
            // $(this).css('background-color', 'yellow').css('color', 'red');
            $(this).css({
                'color': 'red',
                'background-color': 'yellow'
            })
        });
       
    });
});