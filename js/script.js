const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".menu-links");
const lines = document.querySelectorAll(".line");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open")
    for(i=0; i<3 ;i++){
    lines[i].classList.toggle("line-color")
    }
});


$('.service-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

$("#customer-testimonial").owlCarousel({
    items:1,
    autoplay:true,
    nav: true,
    smartSpeed:700,
    look:true,
    autoPlayHoverPause:true
})

