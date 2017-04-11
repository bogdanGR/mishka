'use strict';
(function () {
  var burger = document.querySelector('.burger');

  burger.addEventListener('click', function() {
    if (burger.classList.contains('burger--closed')) {
      burger.classList.remove('burger--closed');
    } else {
      burger.classList.add('burger--closed');
    }
  });


  var navMain = document.querySelector('.menu');
  var navToggle = document.querySelector('.page-header__toggle');

  navMain.classList.remove('menu__nav--nojs');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('menu__nav--opened')) {
      navMain.classList.remove('menu__nav--opened');
      navMain.classList.add('menu__nav--closed');
    } else {
      navMain.classList.add('menu__nav--opened');
      navMain.classList.remove('menu__nav--closed');
    }
  });
})();
