//PAGE LOADER BELOW

$(window).on('load', function() {
  $('.loader-wrapper').fadeOut('slow');
});

// BURGER MENU BELOW, COMPILED FROM BABEL

var app = (function() {
  var body = void 0;
  var menu = void 0;
  var menuItems = void 0;
  var nav = void 0;

  var init = function init() {
    body = document.querySelector('body');
    menu = document.querySelector('.menu-icon');
    menuItems = document.querySelectorAll('.nav__list-item');
    nav = document.querySelector('.nav_');

    applyListeners();
  };

  var applyListeners = function applyListeners() {
    menu.addEventListener('click', function() {
      return toggleClass(body, 'nav-active');
    });
  };

  var toggleClass = function toggleClass(element, stringClass) {
    if (element.classList.contains(stringClass)) {
      element.classList.remove(stringClass);

      setTimeout(function() {
        nav.style.display = 'none';
      }, 800);
    } else {
      menu.style.backgroundColor = 'transparent';
      console.log('opened menu');
      nav.style.display = 'block';
      setTimeout(function() {
        element.classList.add(stringClass);
      }, 200);
    }
  };

  init();
})();

//END BURGER MENU

//LANGUAGE

$('.langChoice').on('click', function() {
  $('.langChoice').css('font-weight', 500);
  $(this).css('font-weight', 900);
  $('#langSelected').html($(this).html());
});

let eng = document.getElementById('ENG');
let man = document.getElementById('MAN');

function changeLang(lang) {
  location.href = lang;
}

//END LANGUAGE

let cCustomWine = $('#cCustomWine');
let cOrderProcess = $('#cOrderProcess');
let cWineMaking = $('#cWineMaking');
let cAbout = $('#cAbout');
let cContact = $('#cContact');

cCustomWine.on('click', () => {
  window.location.href = 'label.html';
});

cOrderProcess.on('click', () => {
  window.location.href = 'order.html';
});

cWineMaking.on('click', () => {
  window.location.href = 'wine.html';
});

cAbout.on('click', () => {
  window.location.href = 'about.html';
});

cContact.on('click', () => {
  window.location.href = 'contact.html';
});

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
