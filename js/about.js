let navBg = document.getElementById('navBg');
let burgerIcon = document.querySelectorAll('.menu-icon__line');
let langSelected = document.getElementById('langSelected');
let mainLogo = document.getElementById('main-logo-img');
let globe = document.getElementById('globe');

window.onscroll = function() {
  if ($(window).scrollTop() < 30) {
    navBg.style.top = '-20vh';
    langSelected.style.color = 'white';
    setTimeout(function() {
      mainLogo.src = '../images/logowhitecn.png';
      globe.src = '../images/globebw.png';
    }, 300);

    burgerIcon.forEach(function(item) {
      item.style.backgroundColor = 'white';
    });
  } else {
    navBg.style.top = '0';
    langSelected.style.color = 'black';
    setTimeout(function() {
      mainLogo.src = '../images/logoMobileCN.png';
      globe.src = '../images/globe.png';
    }, 300);
    burgerIcon.forEach(function(item) {
      item.style.backgroundColor = 'black';
    });
  }
};
