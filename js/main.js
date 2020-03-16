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

var menuMobileWrap = document.querySelector('.menu-mobile-wrapper');
var menuMobile = document.querySelector('.menu-mobile');
var menu = document.querySelector('.header');

menuMobileWrap.addEventListener('click', function () {
  menuMobile.classList.toggle('menu-mobile-active')
  menu.classList.toggle('header-active');
})