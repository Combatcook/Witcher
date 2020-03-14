var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.arrow',
      },
    breakpoints: {
      540: {
        slidesPerView: 2
      }
    }
});

var menuMobile = document.querySelector('.menu-mobile');
var menu = document.querySelector('.header');

menuMobile.addEventListener('click', function () {
  menuMobile.classList.toggle('menu-mobile-active')
  menu.classList.toggle('header-active');
})