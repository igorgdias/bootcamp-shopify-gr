$('.accordion').on('click', function (event) {
    event.preventDefault();
    $(this).toggleClass('active').siblings().toggle();
    if ($(this).children( ".accordion__menu__btn" ).text() == "+") {
        $(this).children( ".accordion__menu__btn" ).text("-")
    } else{
        $(this).children( ".accordion__menu__btn" ).text("+")
    }
});

$('.main-mega-menu').on('click', function (event) {
    event.preventDefault();
    $(".mega-menu").toggle();
    $(".mega-menu").find(".accordion").siblings().css("display", "none")
    $(".accordion").children( ".accordion__menu__btn" ).text("+")
});

$('.dg').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    touchThreshold: 2,
    swipeToSlide: true,
});

$('.slide-tab').on('click', function(event) {
    event.preventDefault();
    c = $(this).attr('collection')
    c = ".dg." + c
    $(this).addClass("active-tab")
    $(this).siblings().removeClass("active-tab")
    s = $(c).slick('slickCurrentSlide')
    $(c).removeClass('inactive-slide').slick("slickGoTo", s,"false")
    $(c).siblings().addClass('inactive-slide')
});