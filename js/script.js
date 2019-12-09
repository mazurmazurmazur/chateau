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

function newWindow(loc) {
  window.location.href = loc;
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

//AGE CONSENT BELOW

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function checkIfAgeCookie() {
  if (getCookie('over18') == 'over') {
    $('#age-verify').addClass('hidden');
  }
}

overAge = function() {
  $('#age-verify').addClass('hidden');
  setCookie('over18', 'over', 7);
};

underAge = function() {
  $('#age-verify').addClass('under');
};

checkIfAgeCookie();

//END OF AGE CONSENT
