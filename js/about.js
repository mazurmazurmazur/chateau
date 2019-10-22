// let navBg = document.getElementById('navBg');
// let burgerIcon = document.querySelectorAll('.menu-icon__line');
// let langSelected = document.getElementById('langSelected');
// let mainLogo = document.getElementById('main-logo-img');
// let globe = document.getElementById('globe');

// window.onscroll = function() {
//   if ($(window).scrollTop() < 30) {
//     navBg.style.top = '-20vh';
//     langSelected.style.color = 'white';
//     setTimeout(function() {
//       if (document.documentElement.lang == 'cn')
//         mainLogo.src = '../images/logowhitecn.png';
//       else mainLogo.src = '../images/logo_white.png';
//       globe.src = '../images/globebw.png';
//     }, 300);

//     burgerIcon.forEach(function(item) {
//       item.style.backgroundColor = 'white';
//     });
//   } else {
//     navBg.style.top = '0';
//     langSelected.style.color = 'black';
//     setTimeout(function() {
//       if (document.documentElement.lang == 'cn')
//         mainLogo.src = '../images/logoMobileCN.png';
//       else mainLogo.src = '../images/logo_black.png';

//       globe.src = '../images/globe.png';
//     }, 300);
//     burgerIcon.forEach(function(item) {
//       item.style.backgroundColor = 'black';
//     });
//   }
// };

$(window).on('load', function() {
  $('.navContainer').on('click', function() {
    showContent($('.center'));
  });
});

function showContent(centerItem) {
  $('.grid-item').fadeOut(500);
  $('.label-section').fadeOut(500);
  $('#about-team').fadeOut(500);

  if (window.matchMedia('screen and (min-width: 900px)').matches) {
    $('body, html').animate(
      {
        scrollTop: 500
      },
      1000
    );
  }

  if (centerItem.is($('#content-one'))) $('.about-one').fadeIn(500);
  else if (centerItem.is($('#content-two'))) $('.about-two').fadeIn(500);
  else if (centerItem.is($('#content-three'))) $('.about-three').fadeIn(500);
  else if (centerItem.is($('#content-four'))) {
    $('.about-four').fadeIn(500);
    $('#about-team')
      .css('display', 'grid')
      .hide()
      .fadeIn(500);
  }
}
