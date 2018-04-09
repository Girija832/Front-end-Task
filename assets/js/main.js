$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top -60)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});

    $(document).ready(function() {
            $("#owl-demo").owlCarousel({
                pagination: false,
                navigation: true,
                slideSpeed: 300,
                paginationSpeed: 400,
                autoPlay: 3000,
                stopOnHover: true,
                items: 3,
                navigationText: ["<img src='assets/images/left.png'>", 
                                "<img src='assets/images/right.png'>"],
            });
            
        });