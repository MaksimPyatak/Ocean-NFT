//$(document).ready(function() {
//   $('.second_line__burger').click(function(event){
//      $('.second_line__burger, .second-line__menu').toggleClass('active');
//      $('body').toggleClass('lock');
//      $('.header__zero').toggleClass('sheet');
//   });
//   $('.last_section__about_store__open').click(function(event){
//      $('.last_section__about_store__open, ._section').toggleClass('active1');
//   });
//   $('.last_section__categories__open').click(function(event){
//      $('.last_section__categories__open, ._section').toggleClass('active2');
//   });
//   $('.last_section__newsletter__open').click(function(event){
//      $('.last_section__newsletter__open, ._section').toggleClass('active3');
//   });
//});

const iconMenu = document.querySelector('.header__burger');
if (iconMenu){
   const menuBody = document.querySelector('.menu__body');
   const headerZero = document.querySelector('.header__zero');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
      headerZero.classList.toggle('_active');
   })
}

const swiper = new Swiper('.new_arrivals_watch_box__swiper-container', {
   // Optional parameters
   //direction: 'vertical',
   //loop: true,

   //Кількість слайдів на перегляд (одночасно видимі слайди в контейнері повзунка).
   //До використання цієї властивості в проекті з годжинником слайд був занадто широким
   slidesPerView: 'auto',

   // If we need pagination
   //pagination: {
   //  el: '.swiper-pagination',
   //},
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   //scrollbar: {
   //  el: '.swiper-scrollbar',
   //},
   //spaceBetween: 130,
   centeredSlides: true,
 });