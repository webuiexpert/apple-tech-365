$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,            // Enable looping
        margin: 10,            // Space between items
        nav: true,             // Show navigation arrows
        dots: false,           // Hide dots
        items: 5,              // Display 5 items at a time
        slideBy: 1,            // Slide 1 item at a time
        responsive: {          // Responsive breakpoints
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
});