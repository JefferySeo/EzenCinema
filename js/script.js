$(function () {
    $('.snack').hide();
    $('.drink').hide();

    $('.tab li').click(function () {
        $('.tab li').removeClass('on')
        $(this).addClass('on')

        let num = $(this).index()
        console.log(num)


        if (num == 0) {
            $('.snack').hide();
            $('.drink').hide();
            $('.combo').show();
        } else if (num == 1) {
            $('.combo').hide();
            $('.drink').hide();
            $('.snack').show();
        } else if (num == 2) {
            $('.combo').hide();
            $('.snack').hide();
            $('.drink').show();
        }
    });


});