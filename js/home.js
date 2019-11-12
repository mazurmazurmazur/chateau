$('#content1').on('click', function() {
  window.location = 'index.html';
});

$('#content2').on('click', function() {
  window.location = 'about.html';
});

$('#content3').on('click', function() {
  window.location = 'label.html';
});

$('#content4').on('click', function() {
  window.location = 'wine.html';
});

$('#content5').on('click', function() {
  window.location = 'contact.html';
});
$('#content6').on('click', function() {
  window.location = 'china-label.html';
});
$('#content7').on('click', function() {
  window.location = 'why-ukrainian.html';
});

$('#arrowDownContainer img').on('click', function() {
  if (window.matchMedia('screen and (min-width: 900px)').matches) {
    $('body, html').animate(
      {
        scrollTop: 500
      },
      1000
    );
  }
});
