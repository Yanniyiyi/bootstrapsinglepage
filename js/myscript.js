$(function () {

    smoothScroll.init();

    $(".player").mb_YTPlayer();

    "use strict";
    var topoffset = 50;

    $('#featured').carousel({
        interval: false
    });



    //Activate Scorllspy
    $('body').scrollspy({
        target: 'header .navbar',
        offset: topoffset
    });

    //Add inbody class to nav
    $('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
        var hash = $(this).find('li.active a').attr('href');
        if (hash !== '#featured') {
            $('header nav').addClass('inbody');
        } else {
            $('header nav').removeClass('inbody');
        }
    });



    $('.ghost').hover(function () {
        $(this).addClass('animated rubberBand')
    }, function () {
        $(this).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
            $(this).removeClass('animated rubberBand');
        });
    });


    $('#element-to-animate').css('opacity', 0);

    $('.element-to-animate').waypoint(function () {
        $('.element-to-animate').addClass('fadeInLeft');
    }, {
        offset: '50%'
    });

});