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
    // 영화상세
$(function(){

        $('.k-tab>li').click(function(){
            $('.k-tab>li>a').toggleClass('active');
            if($('#information').hasClass("active")){
                $('#k-information').addClass("active");
            }else{
                $('#k-information').removeClass("active");
            }
            if($('#review').hasClass("active")){
                $('#k-review').addClass("active");
            }else{
                $('#k-review').removeClass("active");
            }
        });
        // $(document).ready(function(){
            
        // });
        
        $(document).ready(function() {
            $('fieldset.rate input').on('click', function() {
              var ratingValue = $(this).val();
              $('.rating-number').text(ratingValue);
            });
          });
});


});
$(function(){
    // 스토어메뉴 fixed
    $(window).scroll(function(){
        const storemenu = $('#k-menu').offset().top;
        if(storemenu > 0){
            $('#k-menu').css({top: '0px'});
        }else{
            $('#k-menu').css({top : '166px'});
        }


    });
        // 스토어 메뉴 클릭 시 스크롤 이동
        $(document).ready(function() {
            $('.k-store-menu').on('click', function(event) {
            //event.preventDefault(); // 링크 이동을 막음
            var target = $(this.hash); // 클릭한 메뉴의 하이퍼링크 타겟을 가져옴
            var topOffset = $('.k-store_menu').height(); // 상단 메뉴바의 높이를 가져옴
            var targetTop = target.offset().top - topOffset; // 타겟의 위치에서 상단 메뉴바 높이를 뺀 값을 구함
            $('html, body').animate({
                scrollTop: targetTop
            }, 500); // 500ms 동안 스크롤 이동 애니메이션 실행
            });
        });
        // $(document).ready(function() {
        //     // 첫 번째 li 요소에 active 클래스 추가
        //     $(".k-store_menu li:first-child").addClass("active");
          
        //     // 메뉴 클릭 시 active 클래스 추가/제거
        //     $(".k-store-menu").on("click", function() {
        //       // 다른 메뉴의 active 클래스 제거
        //       $(".k-store_menu .active").removeClass("active");
        //       // 현재 메뉴에 active 클래스 추가
        //       $(this).parent().addClass("active");
        //     });
        //   });

});