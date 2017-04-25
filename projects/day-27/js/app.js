new Vue({
    el: '#app',

    data: {
        api_key: '8587e72e12904f85c77440917cfe59e1',
        api_url: 'https://api.themoviedb.org/3/tv/60797',
        episodes: [],
        season_poster: '',
        collapsed: true
    },

    methods: {

        fetchEpisodes: function(num, id) {
            let url = this.api_url + '/season/'+ num +'?api_key=' + this.api_key;
            $('.seasons a').removeClass('active');
            $('#' + id).addClass('active');
            return axios.get(url)
                .then(res => {
                    //console.log(res.data);
                    // this.season_poster = 'https://image.tmdb.org/t/p/w500' + res.data.poster_path;
                    this.season_poster = 'img/cover-' + id + '.jpg';
                    this.episodes = res.data.episodes;
                });
                i++;
        }


    },

    created() {
        this.fetchEpisodes(1, 's1');
    }


});

$('.slideto').click(function(e) {
    e.preventDefault();
    let section = $(this).attr('href');
    $('html,body').animate({
        scrollTop: $(section).offset().top
    }, 1000);
});

$(document).ready(function () {
    $(document).on("scroll", onScroll);
});

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