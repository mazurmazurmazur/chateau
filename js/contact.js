$(document).ready(function() {
  // Test for placeholder support
  $.support.placeholder = (function() {
    var i = document.createElement('input');
    return 'placeholder' in i;
  })();

  // Hide labels by default if placeholders are supported
  if ($.support.placeholder) {
    $('.form-label').each(function() {
      $(this).addClass('js-hide-label');
    });

    // Code for adding/removing classes here
    $('.form-group')
      .find('input, textarea')
      .on('keyup blur focus', function(e) {
        // Cache our selectors
        var $this = $(this),
          $parent = $this.parent().find('label');

        switch (e.type) {
          case 'keyup':
            {
              $parent.toggleClass('js-hide-label', $this.val() == '');
            }
            break;
          case 'blur':
            {
              if ($this.val() == '') {
                $parent.addClass('js-hide-label');
              } else {
                $parent
                  .removeClass('js-hide-label')
                  .addClass('js-unhighlight-label');
              }
            }
            break;
          case 'focus':
            {
              if ($this.val() !== '') {
                $parent.removeClass('js-unhighlight-label');
              }
            }
            break;
          default:
            break;
        }
      });
  }

  let name = document.getElementById('name');
  let emailAddress = document.getElementById('email');
  let subject = document.getElementById('subject');
  let message = document.getElementById('message');
  let sentEmailAlert = document.getElementById('sentEmail');

  document.getElementById('sendEmail').addEventListener('click', function() {
    if (
      name.validity.valid &&
      emailAddress.validity.valid &&
      subject.validity.valid &&
      message.validity.valid
    ) {
      sentEmailAlert.style.color = 'black';

      Email.send({
        Host: 'smtp.gmail.com',
        Username: 'mailsimbio@gmail.com',
        Password: ',S<~-g3r#aG]45ev',
        To: 'kasia@siqiuli.com',
        From: 'mailsimbio@gmail.com',
        Subject: 'SIQIULI: ' + subject.value,
        Body:
          'Interestants name: ' +
          name.value +
          '<br>' +
          'Message : <br>' +
          message.value +
          '<br>Answer to: ' +
          emailAddress.value
      })
        .then(message => console.log(message))
        .then((sentEmailAlert.innerHTML = 'Message sent!'));

      name.value = '';
      emailAddress.value = ''; ///clearing up all text fields in email form after sending email
      subject.value = '';
      message.value = '';
    } else {
      sentEmailAlert.style.color = 'red';
      sentEmailAlert.innerHTML =
        'Email NOT sent, remember to use all fields correctly';
    }
  });
});

// Make the MODAL element draggable:
dragElement(document.querySelector('.modal'));

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  if (document.getElementById(elmnt.id + 'header')) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + 'header').onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    // e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + 'px';
    elmnt.style.left = elmnt.offsetLeft - pos1 + 'px';
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close-modal')[0];

// When the user clicks on the button, open the modal
$(window).on('load', function() {
  if (window.matchMedia('screen and (min-width: 761px)').matches) {
    setTimeout(function() {
      modal.style.display = 'block';
    }, 4000);
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// MAP BELOW
var map = L.map('leafletMap').setView([46.327, 29.287], 13);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
L.tileLayer(
  'http://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}'
).addTo(map);

var greenIcon = L.icon({
  iconUrl: '../images/faviconred.png',

  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 50] // point of the icon which will correspond to marker's location
});

var marker = L.marker([46.322, 29.29], { icon: greenIcon }).addTo(map);

//END MAP
