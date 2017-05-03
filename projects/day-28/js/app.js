$('.container').hide();

$(function() {



    const video = document.getElementById('bgvid');
    const loader = $('#loader');
    let topdiv = $('#about').offset().top;
    let menu = $('.menu');

    $('.project').parallax();

    $(window).scroll(function() {
        if ($(this).scrollTop() >= topdiv) {
            menu.css('opacity', 1);
        }
        else {
           menu.css('opacity', 0);
        }
    });

    $('#burger').click(function() {
        $('#nav').slideToggle();
        if($(this).hasClass('fa fa-bars')) {
            $(this).attr('class', 'fa fa-times');
        } else {
            $(this).attr('class', 'fa fa-bars');
        }
        
    });
    
    $('#nav > a').each(() => {
        $(this).on('click', () => {
            $('#nav').slideUp();
        });
    });

    $('.slideto').click(function(e) {
        e.preventDefault();
        let section = $(this).attr('href');
        $('html,body').animate({
            scrollTop: $(section).offset().top
        }, 1000);
    });

    function loadVideoBkg() {
        let req = new XMLHttpRequest();
        req.open('GET', 'video/bkg.mp4', true);
        req.responseType = 'blob';
        req.onload = function() {
            if (this.status === 200) {
                var videoBlob = this.response;
                var vid = URL.createObjectURL(videoBlob); // IE10+
                video.src = vid;
                loader.fadeOut();
            } else {

            }
        }
        req.send();
    }

    function onScroll(event){
        var scrollPosition = $(document).scrollTop();
        $('.menu a').each(function () {
        var currentLink = $(this);
        var refElement = $(currentLink.attr("href"));
        if (refElement.position().top <= scrollPosition 
            && refElement.position().top + refElement.height() > scrollPosition) {
            $('.menu li a').removeClass("active");
                currentLink.addClass("active");
            }
            else{
                currentLink.removeClass("active");
            }
        });
    }

    $(document).on("scroll", onScroll);
    loadVideoBkg();
});

$(window).on('load', function() {
    $('#loader').hide();
    $('.container').show();
});

window.sr = ScrollReveal({ reset: true });
sr.reveal('#about h2', { delay: 200 });
sr.reveal('#about p.intro', { delay: 200 });
sr.reveal('#about p', { delay: 200 });
sr.reveal('.clientsbox', { delay: 1000 });
sr.reveal('.clientsbox img', { delay: 1000 }, 200);

sr.reveal('#services h2', { delay: 200 });
sr.reveal('#services p', { delay: 200 });
sr.reveal('.service', { delay: 800 }, 200);