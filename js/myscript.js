$(function () {

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
            $('header nav').toggleClass('inbody');
        } else {
            $('header nav').toggleClass('inbody');
        }
    });

     $('.player').mb_YTPlayer();

});