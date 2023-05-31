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
    
});
/*-------------------------------scrollUp---------------------------------*/
// function scrollUp(){
//     window.scrollTo({top:0, behavior: 'smooth'});
// }
// $(function(){
//         $(window).on('scroll',function(){
//             if($(window).scrollTop()>300){
//               $('#scroll-box').fadeIn()
//               $('#reserv').animate({
//                 right : 60
//               });
//             }else if($(window).scrollTop()<=300){
//               $('#scroll-box').fadeOut();
              
//             }
//         });
// });
/*-------------------------------scrollUp---------------------------------*/




// 영화상세
$(function(){
        //좋아요 버튼
        // $(document).ready(function() {
        //     $(".k_mv_datat_like").click(function() {
        //       $("#likeimage").attr("src", function(index, currentSrc) {
        //         if (currentSrc === "images/moviedetail/likeoff.png") {
        //           return "images/moviedetail/likeon.png";
        //         } else {
        //           return "images/moviedetail/likeoff.png";
        //         }
        //       });
        //     });
        //   });
        //좋아요 버튼
        $('#likeimage>span').click(function(){
            $('#likeimage>span').toggleClass("on")
        });
        //기본 span안에 likeoff.png 이미지가 들어가있고
        //클릭을 하면 on이라는 Class 생기면서 on Class에
        //style.css를 likeon.png 으로 경로를 바꿔준다

        // likeimage라는 이미지를 클릭했을때
        // 이미지 소스가 src="images/moviedetail/likeon.png"으로
        // 변경되고 누르때마다 on off으로 변경된다
        
        //정보 리뷰 active
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

        //스틸컷 슬라이드
        $('.pt-in').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            nextArrow:$('#btn-right'),
            prevArrow:$('#btn-left'),
            
        });
        
        //예고편 슬라이드
        $('.k-slide').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow:$('.slidenext'),
            prevArrow:$('.slideprev'),
            dots:true,
            dotsClass:'slide_dots',
          });

        //영상 켜기
          $(".k-trailer_btn").click(function(){
            const Popup = document.getElementsByClassName("k-popup")[0];
            const fade = document.getElementsByClassName("k-fade")[0];
            Popup.style.display = "block";
            fade.style.display = "block";
        });

        //영상 끄기
        $(".k-fade").click(function(){
            const PopupSlide = document.getElementsByClassName("k-popup")[0];
            const fadeOut = document.getElementsByClassName("k-fade")[0];
            PopupSlide.style.display = "none";
            fadeOut.style.display = "none";
        });

        //슬라이드 링크 변경
        $(".k-trailer_btn").click(function() {
            const vodsrcs = $(this).prev("img").data("vodsrc");
            $(".k-popup iframe").attr("src", vodsrcs);
          });

        //감독 출연진 슬라이드
        $('.k-post-wrapper').slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            // autoplay: true,
            // autoplaySpeed: 2000,
            nextArrow:$('.next'),
            prevArrow:$('.prev'),
          });

        
          // 리뷰상세

        $(document).ready(function() {
            //textarea 글자입력 설정
            $('fieldset.rate input').on('click', function() {
                var ratingValue = $(this).val();
                $('.rating-number').text(ratingValue);
            });
        });

        //textarea 글자입력 설정
        $('.k-text_box textarea').keyup(function(){
            var content = $(this).val();
            $('.k-text_box .count span').html(content.length);
            if (content.length > 220){
              alert("최대 220자까지 입력 가능합니다.");
              $(this).val(content.substring(0, 220));
              $('.k-text_box .count span').html(220);
            }
        });

        //리뷰 좋아요버튼
        $('.k-like2').click(function(){
            $('.k-like2').toggleClass("on")
        });

        //리뷰 순위 active
        $(document).ready(function(){
            $('.k-reviewtitle_ul>span>a').click(function(){
                $('.k-reviewtitle_ul>span>a').removeClass("active");
                $(this).addClass("active");
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