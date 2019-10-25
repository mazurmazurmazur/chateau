$(window).on('load', function() {
  $('.navContainer').on('click', function() {
    showContent($('.center'));
  });
});

if (window.matchMedia('screen and (max-width: 900px)').matches) {
  document.getElementById('historySVG').src = '../images/history-mobile.svg';
}

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
