const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");

imgs.forEach(img => img.addEventListener('click', (e) => 
current.src = e.target.src));


$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })

    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    });

    // sticky navigation menu

    let nav_offset_top = $('.navbar').height() + 50;
    console.log(nav_offset_top);

    function navbarFixed() {
        if ($('.navbar').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('nav').addClass('navbar_fixed');
                } else {
                    $('nav').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});