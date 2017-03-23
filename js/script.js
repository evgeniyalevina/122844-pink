var navMain = document.querySelector(".main-nav");
var navList = document.querySelector(".main-nav__list");
var navToggle = document.querySelector(".main-nav__toggle");

navList.classList.remove("main-nav__list--nojs");

var navClick = function() {
  if (navList.classList.contains("main-nav__list--closed")) {
    navList.classList.remove("main-nav__list--closed");
    navList.classList.add("main-nav__list--opened");
    navToggle.classList.remove('main-nav__toggle--lines');
    navToggle.classList.add('main-nav__toggle--cross');

  } else {
    navList.classList.add("main-nav__list--closed");
    navList.classList.remove("main-nav__list--opened");
    navToggle.classList.add('main-nav__toggle--lines');
    navToggle.classList.remove('main-nav__toggle--cross');

  }

  navToggle.addEventListener('click', navClick);

