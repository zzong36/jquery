$(document).ready(function(){
//    let pTags = document.getElementsByTagName("p");
//    let html = pTags[0].innerHTML
//    let text = pTags[0].innerText

let html=$('p').html()
let text=$('p').text()
let attr = $('a').attr('href')
   alert('html : ' + html + '\ntext: ' + text + '\n주소: ' + attr);

//    pTags[1].innerHTML='<mark>GOOD</mark>'

$('#input').click(function(){
   let name = $('#name').val()
   alert('name : ' + name) 
});

$('#btn02').click(function(){
    $('a').attr('href', 'http://www.daum.net')
})

$('#btn03').click(function(){
    $('p').html(function(index,element){
        console.log('index', element)
        return '<mark>' + index + ':' + element + '</mark>'
    })
})

});

