//handle the preloading
const preloader = document.querySelector(".preloader");
console.log(preloader);
window.addEventListener("load", vanish);

function vanish() {
    preloader.classList.add("disappear");
}
//hnadle date
document.getElementById("year").innerHTML = new Date().getFullYear();

// isotope filter
var $grid = $(".grid").isotope({
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
});
$(document).ready(function() {
// filter items on button click
$(".button-group").on("click", "button", function() {
    var filterValue = $(this).attr('data-filter');
    
    $grid.isotope({ filter: filterValue });
})
  // technology owl carousel
  $('.banner .owl-carousel').owlCarousel({
    nav: false,
    dots: true,
    autoplay:true,
    loop:true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 2
        }
    }
});
});