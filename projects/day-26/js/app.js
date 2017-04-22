$('.slideto').click(function(e) {
    e.preventDefault();
    let section = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(section).offset().top
    }, 1000);
});


$('.slider').bxSlider({
    responsive: true,
    slideWidth: 800,
    pager: false
});

$('.slider-2').bxSlider({
    responsive: true,
    slideWidth: 800,
    pagerCustom: '.bx-pager'
});

    $(document).ready(function () {
    $(document).on("scroll", onScroll);
});

function onScroll(event){
    var scrollPosition = $(document).scrollTop();
    $('nav a').each(function () {
    var currentLink = $(this);
    var refElement = $(currentLink.attr("href"));
    if (refElement.position().top <= scrollPosition 
        && refElement.position().top + refElement.height() > scrollPosition) {
        $('.main-nav li a').removeClass("active");
        currentLink.addClass("active");
    }
    else{
        currentLink.removeClass("active");
    }
    });
}