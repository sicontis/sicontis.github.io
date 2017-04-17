$(document).ready(function(){

    $('#homeBtn').hide();

    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 200) {
        $('body').addClass('changeLogo');
        } else {
            $('body').removeClass('changeLogo');
        }
        if (y > 850) {
        $('#homeBtn').fadeIn();
        } else {
            $('#homeBtn').fadeOut();
        }
    });

    $('#b1').on('click', function(){
        $('html, body').animate({scrollTop: $("#book1").offset().top - 100}, 'easeInOutBounce');
    });
    $('#b2').on('click', function(){
        $('html, body').animate({scrollTop: $("#book2").offset().top - 100}, 'easeInOutBounce');
    });
    $('#b3').on('click', function(){
        $('html, body').animate({scrollTop: $("#book3").offset().top - 100}, 'easeInOutBounce');
    });

    $('#homeBtn').on('click', function(){
        $('html, body').animate({scrollTop: $("#home").offset().top}, 'easeInOutBounce');
    });

});