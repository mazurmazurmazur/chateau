let currentLang;
sessionLang = sessionStorage.getItem('sessionLang');

if (
  sessionLang == 'CN' ||
  sessionLang == 'MAN' ||
  navigator.language == 'cn' ||
  navigator.language == 'zh-CN' ||
  navigator.language == 'zh' ||
  navigator.language == 'zh-Hans'
) {
  currentLang = 'cn';
  console.log('session CN? ' + sessionLang + ' nav CN? ' + navigator.language);
} else if (
  sessionLang == 'EN' ||
  sessionLang == 'ENG' ||
  navigator.language == 'en' ||
  navigator.language == 'EN' ||
  navigator.language == 'eng'
) {
  currentLang = 'en';
  console.log('session EN? ' + sessionLang + ' nav EN? ' + navigator.language);
} else if (
  sessionLang == 'YUE' ||
  navigator.language == 'yue' ||
  navigator.language == 'zh-Hant' ||
  navigator.language == 'YUE' ||
  navigator.language == 'zh-TW' ||
  navigator.language == 'zh-HK'
) {
  currentLang = 'yue';
  console.log(
    'session YUE? ' + sessionLang + ' nav YUE? ' + navigator.language
  );
} else {
  currentLang = 'en';
}

function chooseLangLink(link1, link2, link3) {
  let eng = document.getElementById('ENG');
  let man = document.getElementById('MAN');
  let yue = document.getElementById('YUE');
  let langSelected = document.getElementById('langSelected');

  if (currentLang == 'en') {
    $('.langChoice').css('font-weight', 500);
    eng.style.fontWeight = 900;
    langSelected.innerHTML = '中文';
    return link1;
  } else if (currentLang == 'cn') {
    $('.langChoice').css('font-weight', 500);
    man.style.fontWeight = 900;
    langSelected.innerHTML = 'EN';
    return link2;
  } else if (currentLang == 'yue') {
    $('.langChoice').css('font-weight', 500);
    yue.style.fontWeight = 900;
    langSelected.innerHTML = 'EN';
    return link3;
  }
}

//PAGE LOADER BELOW

//not REST API function
goBack = function() {
  window.history.back();
};

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

let eng = document.getElementById('ENG');
let man = document.getElementById('MAN');
let yue = document.getElementById('YUE');

$('.langChoice').on('click', function() {
  $('.langChoice').css('font-weight', 500);
  $(this).css('font-weight', 900);
  $('#langSelected').html($(this).html());
  sessionStorage.setItem('sessionLang', $(this)[0].id);
  location.reload();
});

function changeLang(lang) {
  currentLang = lang;
  location.href = lang;
}

//END LANGUAGE

function newWindow(loc) {
  window.location.href = loc;
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  // win.focus();
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

let linkEnGen =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/menu_and_general&slug=en';
let linkCnGen =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/menu_and_general&slug=en-copy';
let linkYueGen =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/menu_and_general&slug=en-copy-2';

let link_Gen = chooseLangLink(linkEnGen, linkCnGen, linkYueGen);

let PLChinaButton = document.getElementById('PLChinaButton');
let customWinesButton = document.getElementById('customWinesButton');
let orderButton = document.getElementById('orderButton');
let winemakingButton = document.getElementById('winemakingButton');
let aboutButton = document.getElementById('aboutButton');
let contactButton = document.getElementById('contactButton');
let orderTitle = document.getElementById('orderTitle');
let email = document.getElementById('email');
let message = document.getElementById('message');
let sendEmail = document.getElementById('sendEmail');
let welcoming = document.getElementById('welcoming');
let question = document.getElementById('question');
let subWelcoming = document.getElementById('subWelcoming');
let yesButton = document.getElementById('yesButton');
let noButton = document.getElementById('noButton');
let sorry = document.getElementById('sorry');
let sorryInfo = document.getElementById('sorryInfo');
let backButtonConsent = document.getElementById('backButtonConsent');
let logo = document.getElementById('main-logo-img');
let menuMiddle = document.getElementById('private-label-menu-text');

function fetchGeneral(link) {
  fetch(link)
    .then(res => res.json())

    .then(fillAll);
}

function fillAll(json) {
  let acf = json[0].acf;
  // //selecting json variables
  let PLChinaButtonJSON = acf.menu.menu_1;
  let customWinesButtonJSON = acf.menu.menu_2;
  let orderButtonJSON = acf.menu.menu_3;
  let winemakingButtonJSON = acf.menu.menu_4;
  let aboutButtonJSON = acf.menu.menu_5;
  let contactButtonJSON = acf.menu.menu_6;
  let orderTitleJSON = acf.contact_form.title;
  let emailJSON = acf.contact_form.placeholder_email;
  let messageJSON = acf.contact_form.placeholder_body;
  let sendEmailJSON = acf.contact_form.send_button;
  let welcomingJSON = acf.age_consent.welcoming;
  let questionJSON = acf.age_consent.question;
  let subWelcomingJSON = acf.age_consent.subwelcoming;
  let yesButtonJSON = acf.age_consent.yes_button;
  let noButtonJSON = acf.age_consent.no_button;
  let sorryJSON = acf.age_consent.sorry;
  let sorryInfoJSON = acf.age_consent.sorry_info;
  let backButtonConsentJSON = acf.age_consent.go_back;
  let logoJSON = acf.logo;
  let middleTextJSON = acf.middle_menu_text;

  // //assigning json content to DOM

  logo.src = logoJSON;
  menuMiddle.innerHTML = middleTextJSON;
  PLChinaButton.innerHTML = PLChinaButtonJSON;
  customWinesButton.innerHTML = customWinesButtonJSON;
  orderButton.innerHTML = orderButtonJSON;
  winemakingButton.innerHTML = winemakingButtonJSON;
  aboutButton.innerHTML = aboutButtonJSON;
  contactButton.innerHTML = contactButtonJSON;
  orderTitle.innerHTML = orderTitleJSON;
  email.setAttribute('placeholder', emailJSON);
  message.setAttribute('placeholder', messageJSON);
  sendEmail.innerHTML = sendEmailJSON;
  welcoming.innerHTML = welcomingJSON;
  question.innerHTML = questionJSON;
  subWelcoming.innerHTML = subWelcomingJSON;
  yesButton.innerHTML = yesButtonJSON;
  noButton.innerHTML = noButtonJSON;
  sorry.innerHTML = sorryJSON;
  sorryInfo.innerHTML = sorryInfoJSON;
  backButtonConsent.innerHTML = backButtonConsentJSON;
}

fetchGeneral(link_Gen);
