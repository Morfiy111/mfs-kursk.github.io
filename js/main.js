var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    nav:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('autoplay.play.owl',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('autoplay.stop.owl')
})

$(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up').fadeIn();
        } else {
            $('#button-up').fadeOut();
        }
    });
    $('#button-up').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});

var itemsCount=5;
if (window.matchMedia("(max-width: 991px)").matches) {
    itemsCount=3;
}
if (window.matchMedia("(max-width: 767px)").matches) {
    itemsCount=2;
}
var owl = $('.owl-carousel2');
owl.owlCarousel({
    items:itemsCount,
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
});