"use strict";

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

const swiper = new Swiper('.top-nft__swiper', {
   slidesPerView: 'auto',
   spaceBetween: '35.37',
   centeredSlides: true,
 });

 
// ------------ T A B 's -----------------
 let tab;
 let tabContent;
 
 const valueGrowth = document.getElementsByClassName('seler-card__growth');

 window.onload = function tabS() {
   tab = document.getElementsByClassName('colection-section__tab');
   tabContent = document.getElementsByClassName('colection-section__example');
   hideTabContents(1);

   //For section top-selers. Зміна колоьору
   for (let i = 0; i < valueGrowth.length; i++) {
      let x = valueGrowth[i].innerHTML;
      let y = x.slice(0,-1);
      if (y>0) {
         valueGrowth[i].classList.add("_green");
      } else {
         valueGrowth[i].classList.add("_red")
      }      
   }
};

function hideTabContents(a) {
   for (let i = a; i < tabContent.length; i++) {
      tab[i].classList.remove('_active-bottom');
      tabContent[i].style.display = "none"; 
   }   
}
let tabs = document.querySelector('.colection-section__tabs');
let tabs1 = document.getElementById('colection-section__tabs1');
tabs.onclick = function (event) {
   let target = event.target;
   console.log(target);
   if (target.className == 'colection-section__tab') {
      for (let i = 0; i < tab.length; i++) {    
         if (target == tab[i]) {
            showTabContent(i);
            break;
         }    
         
      }
   }
   
};
function showTabContent(b) {
      hideTabContents(0);
      tab[b].classList.add('_active-bottom');
      tabContent[b].style.display = 'block';
   //   if (tab[b].classList.contains('_active-bottom') = false) {
   //}
}

const swiperArtWorkers = new Swiper('.art-workers__swiper', {
   slidesPerView: 'auto',
   spaceBetween: '35.37',
   centeredSlides: true,
 });

// ------------COLOR SECTION--------------

