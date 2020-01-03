let linkEn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/contact&slug=275';
let linkCn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/contact&slug=275-copy';
let linkYue =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/contact&slug=275-copy-2';

let link_ = chooseLangLink(linkEn, linkCn, linkYue);

let topTitle = document.getElementById('topTitle');
let addressTitle = document.getElementById('addressTitle');
let address = document.getElementById('addressMap');
let backBtn = document.getElementById('buttonBack');
let contactsContainer = document.getElementById('contacts-container');

function fetchContact(link) {
  fetch(link)
    .then(res => res.json())
    .then(fillContact)
    .then(() => {
      $('.loader-wrapper').fadeOut('slow');
    });
}

function fillContact(json) {
  let acf = json[0].acf;
  //selecting json elems
  let topTitleJSON = acf.main_title;
  let addressTitleJSON = acf.map_address.title;
  let addressJSON = acf.map_address.address;
  let contacts = Object.entries(acf.main_contacts);

  //   //assigning json content to DOM
  topTitle.innerHTML = topTitleJSON;
  addressTitle.innerHTML = addressTitleJSON;
  address.innerHTML = addressJSON;

  backBtn.innerHTML = acf.previous_page_button;
  counter = 1;
  contacts.forEach(contact => {
    //creating DOM Elements
    let newGridItem = document.createElement('div');
    let newBR = document.createElement('br');

    //inserting elements inside containerDiv
    newGridItem.innerHTML = contact[1].text;

    //assigning content to DOM Elements

    if (contact[1].image) {
      let newImg = document.createElement('img');
      newImg.id = 'wechatImg';
      newImg.src = contact[1].image;
      newGridItem.appendChild(newImg);

      newGridItem.appendChild(newBR);
      newGridItem.appendChild(newBR);
    }
    contactsContainer.appendChild(newGridItem);

    counter++;
  });
}

fetchContact(link_);

// MAP BELOW
var map = L.map('leafletMap').setView([46.327, 29.287], 13);
L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);
L.tileLayer(
  'https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}'
).addTo(map);

var greenIcon = L.icon({
  iconUrl: '../images/faviconred.png',

  iconSize: [50, 50], // size of the icon
  iconAnchor: [25, 50] // point of the icon which will correspond to marker's location
});

var marker = L.marker([46.322, 29.29], { icon: greenIcon }).addTo(map);

//END MAP
