$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

if (window.matchMedia('screen and (max-width: 900px)').matches) {
  document.getElementById('labelSVG').src = '../images/label-mobile.svg';
}
