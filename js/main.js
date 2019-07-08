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
if (window.matchMedia("(max-width: 450px)").matches) {
    itemsCount=1;
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

jQuery(document).ready(function() {
    var offices	=	{"1":{"num":1,"name":"Центрального филиала","work":["9:00-18:00","9:00-18:00","9:00-18:00","9:00-17:30","10:00-20:00","9:00-18:00","выходной"],"lunch":[" 13:00-14:00","","","",""," 13:00-14:00","",""],"desc":"г.Воронеж, ул. Дружинников, 3Б"},"2":{"num":2,"name":"Ленинского филиала","work":["10:00-19:00","10:00-19:00","10:00-20:00","10:00-18:30","10:00-19:00","10:00-19:00","выходной"],"lunch":[" 14:00-15:00","","","",""," 14:00-15:00","",""],"desc":"г. Воронеж, ул. 20 лет Октября, 123"},"3":{"num":3,"name":"Левобережного филиала","work":["9:00-18:00","10:00-20:00","9:00-18:00","9:00-17:30","9:00-18:00","9:00-18:00","выходной"],"lunch":[" 13:00-14:00","","","",""," 13:00-14:00","",""],"desc":"г. Воронеж, ул. Ростовская, 34"},"4":{"num":4,"name":"Советского филиала","work":["9:00-18:00","9:00-18:00","9:00-17:30","10:00-20:00","9:00-18:00","9:00-18:00","выходной"],"lunch":[" 13:00-14:00","","","",""," 13:00-14:00","",""],"desc":"г. Воронеж, ул. Домостроителей, 24"},"5":{"num":5,"name":"Коминтерновского ф-ла","work":["9:00-18:00","9:00-18:00","9:00-17:30","10:00-20:00","9:00-18:00","9:00-18:00","выходной"],"lunch":[" 13:00-14:00","","","",""," 13:00-14:00","",""],"desc":"г. Воронеж, Московский пр-т, 129/1"},"6":{"num":6,"name":"Железнодорожного ф-ла","work":["9:00-18:00","9:00-18:00","9:00-17:30","9:00-18:00","10:00-20:00","9:00-18:00","выходной"],"lunch":[" 13:00-14:00","","","",""," 13:00-14:00","",""],"desc":"г. Воронеж, Ленинский пр-т, 174П"},"7":{"num":7,"name":"Аннинского ф-ла ","work":["8:00-17:00","8:00-17:00","8:00-17:00","8:00-16:30","8:00-17:00","выходной","выходной"],"lunch":[" 12:00-13:00","12:00-13:00","12:00-13:00","12:00-13:00","12-13:00","",""],"desc":"пгт. Анна, ул. Гнездилова, д. 18"},"8":{"num":8,"name":"Бобровского ф-ла ","work":["8:00-17:00","8:00-17:00","8:00-17:00","8:00-16:30","8:00-17:00","выходной","выходной"],"lunch":[" 12:00-13:00","12:00-13:00","12:00-13:00","12:00-13:00","12:00-13:00","",""],"desc":"г.Бобров, ул. Кирова, д. 44"}};
    var today	=	new Date().getDay();
    if (today == 0) today == 7;
    jQuery(".day-" + today).css("font-weight", "bold");
    jQuery(".hours-office").change(function(e) {
        jQuery("#noScheduleBlock").hide();
        jQuery("#scheduleBlock").show();
        off		=	jQuery(this).val();
        works	=	offices[off].work;
        lunchs	=	offices[off].lunch;
        desc	=	offices[off].desc;
        jQuery("#desc-office").html(desc);
        for (var i = 0; i < 7; i++)	{
            lunch	=	(lunchs[i] != "")?'<img src="images/lunch-icon.png" width="12" style="vertical-align:middle" title="Обед"/>' + lunchs[i]:"";
            work	=	works[i] + ' ' + lunch;
            jQuery(".time-" + (i+1)).html(work);
        }
    });
    jQuery("#noScheduleBlock").show();
    jQuery("#scheduleBlock").hide();
    //jQuery("#hours-office").trigger("change");
});

