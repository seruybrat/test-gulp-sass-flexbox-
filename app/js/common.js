$(document).ready(function(){
 
$('.owl-carousel').owlCarousel({
	center: true,
    pagination: true,
    dots: true,
    items:2,
    margin:10,
    smartSpeed:1000,
    dotsContainer: '#customDots',

});

owl = $('.owl-carousel').owlCarousel();
$(".prev").click(function () {
    owl.trigger('next.owl.carousel');
    changetext();
});

$(".next").click(function () {
    owl.trigger('prev.owl.carousel');
    changetext();
});

function changetext() {
    var text = $('.center .text-wrap').html();
    $(".output").html(text);
}

changetext()
});