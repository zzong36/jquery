$(document).ready(function(){

        $("#mon").hover(function(){
            $(this).animate({
                width: '150px',
                height: '150px',
            });
            $(this).html("월요일");
        }, function(){
            $(this).animate({
                width: '100px',
                height: '100px'
            });
            $(this).html("월");
        });
 
        $("#tue").hover(function(){
            $(this).animate({
                width: '150px',
                height: '150px'
            });
            $(this).html("화요일");
        }, function(){
            $(this).animate({
                width: '100px',
                height: '100px'
            });
            $(this).html("화");
        });
 
        $("#wed").hover(function(){
            $(this).animate({
                width: '150px',
                height: '150px'
            });
            $(this).html("수요일");
        }, function(){
            $(this).animate({
                width: '100px',
                height: '100px'
            });
            $(this).html("수");
        });
 
        $("#thu").hover(function(){
            $(this).animate({
                width: '150px',
                height: '150px'
            });
            $(this).html("목요일");
        }, function(){
            $(this).animate({
                width: '100px',
                height: '100px'
            });
            $(this).html("목");
        });
 
        $("#fri").hover(function(){
            $(this).animate({
                width: '150px',
                height: '150px'
            });
            $(this).html("금요일");
        }, function(){
            $(this).animate({
                width: '100px',
                height: '100px'
            });
            $(this).html("금");
        });

        $("#sat").hover(function(){
            $(this).animate({
                width: '150px',
                height: '150px'
            });
            $(this).html("토요일");
        }, function(){
            $(this).animate({
                width: '100px',
                height: '100px'
            });
            $(this).html("토");
        });

        $("#sun").hover(function(){
            $(this).animate({
                width: '150px',
                height: '150px'
            });
            $(this).html("일요일");
        }, function(){
            $(this).animate({
                width: '100px',
                height: '100px'
            });
            $(this).html("일");
        });
 

});
