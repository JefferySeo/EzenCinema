$(function(){
    $(function () {
        $('ul li a').click(function () {
        $('.popup').fadeIn(300);
        $('.card').fadeIn(300);
        });
        $('.btn_close').click(function () {
        $('.popup').fadeOut(300);
        $('.card').fadeOut(300);
        });
        });
})