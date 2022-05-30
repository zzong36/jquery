$(document).ready(function(){
    // $('#btn01').click(function(){
    //     let h1Tag= document.createElement('h1')
    //     let text = document.createTextNode("세번째 문장")
    //     h1Tag.appendChild(text)
    //     let divTag=document.querySelector('div')
    //     divTag.append(h1Tag) 
    //     // divTag.prepend(h1Tag) // 앞쪽으로 추가
    // })

    $('#btn01').click(function(){
    $('div').append('<h1>세번째 문장</h1>')
    })

    $('#btn02').click(function(){
        $('ol').append('<li>노랑</li>', '<li>보라</li>')
    })

    $('#btn03').click(function(){
        // 내 앞에 추가하는 것
        $('div').before('<a href="http://www.naver.com">네이버</a>')
    })
    
    $('#btn04').click(function(){
        // let pTags = document.querySelectorAll('a')
        // for(let i = 0; i < pTags.length; i++){
        //     // pTags[i].remove()는 익스플로러에서 쓰이지 않음
        //     pTags[i].parentNode.removeChild(pTags[i])
        // }

        // jquery
        // remove는 div까지 지워짐
        // $('div').remove()

        // empty는 자식만 지움
        // $('div').empty()

        // 자식 중 일부만 지우기
        // 자식만 뽑아내려면 div > *
        $('div > *').remove('h1')

        // $('div > *').addClass('c01')
        // $('h1').removeClass('c01')
    })

    $('#btn05').click(function(){
        // 공백으로 둘을 구분
       $('h1').addClass('red blue')
    })
    
    $('#btn06').click(function(){
       $('h1').removeClass('blue')
    })
    



});