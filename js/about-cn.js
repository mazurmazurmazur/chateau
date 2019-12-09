$(window).on('load', function() {
  $('.navContainer').on('click', function() {
    showContent($('.center'));
  });
});

if (window.matchMedia('screen and (max-width: 900px)').matches) {
  document.getElementById('historySVG').src = '../images/history-mobile-cn.svg';
}
