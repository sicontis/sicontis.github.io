const banner = _('#banner');
const bannerTop = banner.offsetTop + 100;

function _(el) {
    return document.querySelector(el);
}

function changeBanner() {
    if(window.scrollY >= bannerTop) {
        document.body.classList.add('changeLogo');
    } else {
        document.body.classList.remove('changeLogo');
    }
}

window.addEventListener('scroll', changeBanner);

$('#b1').on('click', function(){
    $('html, body').animate({scrollTop: $("#book1").offset().top - 100}, 'easeInOutBounce');
});
$('#b2').on('click', function(){
    $('html, body').animate({scrollTop: $("#book2").offset().top - 100}, 'easeInOutBounce');
});
$('#b3').on('click', function(){
    $('html, body').animate({scrollTop: $("#book3").offset().top - 100}, 'easeInOutBounce');
});

$('#hm1').on('click', function(){
    $('html, body').animate({scrollTop: $("#home").offset().top}, 'easeInOutBounce');
});
$('#hm2').on('click', function(){
    $('html, body').animate({scrollTop: $("#home").offset().top}, 'easeInOutBounce');
});
$('#hm3').on('click', function(){
    $('html, body').animate({scrollTop: $("#home").offset().top}, 'easeInOutBounce');
});