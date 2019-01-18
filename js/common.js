// $(function() {

$('.owl-two').owlCarousel({
    stagePadding: 10,
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false
        },
        1200:{
            items:4,
            nav:false
        }
    }
})
$('.owl-three').owlCarousel({
    stagePadding: 20,
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        765:{
            items:2,
            nav:false
        },
        1000:{
            items:2,
            nav:false
        },
        1200:{
            items:3,
            nav:false
        }
    }
})
$("#modal_trigger").leanModal({
    top: 100,
    overlay: 0.6,
    closeButton: ".modal_close"
});

// });

// $( document ).ready(function() {
//     var Body = $('body');
//     Body.addClass('preloader-site');
// });
var overlay = document.getElementById("overlay");
    window.addEventListener('load', function()
    {
        overlay.style.display = "none";
        $("#slideinleft").animate({
            left: '0px',

        }, 1000)

        $("#slideinright").animate({
            right: '0px'
            
        }, 1000)

         $("#slideleft").animate({
            left: '0px',

        }, 1000)

        $("#slideright").animate({
            right: '0px'
        }, 1000)
    })
    

// $(window).load(function() {

// });
