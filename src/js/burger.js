'use strict';
var navMain = document.querySelector('.page-header__wrapper');
var navToggle = document.querySelector('.burger');
var menuToggle = document.querySelector('.menu--visible');
if(navMain) {
  navMain.classList.remove('page-header__wrapper--menu-nojs');
}
navToggle.addEventListener('click', toggle);
function toggle(e) {
  e.preventDefault();
  menuToggle.classList.toggle('menu--visible');
  navToggle.classList.toggle('burger--opened');
}
