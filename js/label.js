let linkEn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/custom_wines&slug=en';
let linkCn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/custom_wines&slug=en-copy';
let linkYue =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/custom_wines&slug=en-copy-2';

let link_ = chooseLangLink(linkEn, linkCn, linkYue);

let topTitle = document.getElementById('topTitle');
let labelDesc = document.getElementById('labelDesc');
let labelImg = document.getElementById('customBottle');
let priceBtn = document.getElementById('price-list-btn');
let forwardBtn = document.getElementById('buttonForward');
let backBtn = document.getElementById('buttonBack');

function fetchLabel(link) {
  fetch(link)
    .then(res => res.json())
    .then(fillWine)
    .then(() => {
      $('.loader-wrapper').fadeOut('slow');
    });
}

function fillWine(json) {
  let acf = json[0].acf;
  //selecting json elems
  let topTitleJSON = acf.main_title;
  let labelDescJSON = acf.main_description;
  //   //assigning json content to DOM
  topTitle.innerHTML = topTitleJSON;
  labelDesc.innerHTML = labelDescJSON;
  labelImg.src = acf.main_image;
  priceBtn.setAttribute(
    'onclick',
    'openInNewTab("' + acf.price_list.price_list_file.url + '")'
  );
  priceBtn.innerHTML = acf.price_list.button_text;
  backBtn.innerHTML = acf.previous_page;
  forwardBtn.innerHTML = acf.next_page;
}

fetchLabel(link_);
