$(function(){
    // header 내비게이션 작동
    $('.header-gnb>li:not(:nth-child(5))>a').mouseover(function(){
        $('.header-hide').removeClass('on');
        $('.header-gnb>li>a').removeClass('on')
        $('.header-gnb>li>.header-lnb').removeClass('on');
        $('.header-hide').addClass('on');
        $(this).addClass('on')
        $(this).next('.header-lnb').addClass('on');
    })
    $('.header-hide').mouseleave(function(){
        $('.header-hide').removeClass('on');
        $('.header-gnb>li>a').removeClass('on')
        $('.header-gnb>li>.header-lnb').removeClass('on');
    })

    // hero 슬라이드
    let heroInterval = setInterval(mySlide,3000);
    function mySlide(){
        $('.ts-slide-box').animate({
            'left': "-1100px"
        },500, function(){
            $('.ts-slide-box .slide:first-child')
            .clone()
            .appendTo('.ts-slide-box');
            $('.ts-slide-box .slide:first-child').remove();
            $('.ts-slide-box').css('left',0);
        });
    }
    $('.ts-slide-frame').mouseover(function(){
        clearInterval(heroInterval);
    }).mouseleave(function(){
        heroInterval = setInterval(mySlide, 3000);
    });

    $('.office-moviebox').hover(function(){
        $(this).find('.office-review').stop().fadeToggle(200);
    })
})