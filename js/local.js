$(document).ready(function(){

    $('.left-slider').slick({
        autoplay:true,
        autoplaySpeed: 4000,
        speed:400,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    });
    $('.right-slider').slick({
        autoplay:true,
        autoplaySpeed: 4000,
        speed:400,
        rtl:true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    });
    $('.testimonials-slider').slick({
        autoplay:true,
        autoplaySpeed: 4000,
        speed:400,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
    })
    
    $('.team-slider').slick({
        autoplay:true,
        autoplaySpeed: 4000,
        speed:400,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        arrows:false
    })

    var tabEl = $('button[data-bs-toggle="tab"]');
    tabEl.on('shown.bs.tab', function (event) {
        $('.right-slider, .left-slider').slick('refresh');
    });


    AOS.init();

});

