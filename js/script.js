var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");

var navClick = function() {
  if (navMain.classList.contains("main-menu--closed")) {
    navMain.classList.remove("main-menu--closed");
    navMain.classList.add("main-menu--opened");
    navToggle.classList.remove('main-nav__toggle--lines');
    navToggle.classList.add('main-nav__toggle--cross');

  } else {
    navMain.classList.add("main-menu--closed");
    navMain.classList.remove("main-menu--opened");
    navToggle.classList.add('main-nav__toggle--lines');
    navToggle.classList.remove('main-nav__toggle--cross');

  }

  navToggle.addEventListener('click', navClick);

