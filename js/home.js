let linkEn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/chateau_home&slug=en';
let linkCn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/chateau_home&slug=en-copy';
let linkYue =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/chateau_home&slug=en-copy-2';

let link_ = chooseLangLink(linkEn, linkCn, linkYue);

let topTitle = document.getElementById('topTitle');
let homeDesc = document.getElementById('homeDesc');
let buttonNext = document.getElementById('buttonNext');

function fetchContact(link) {
  fetch(link)
    .then(res => res.json())

    .then(fillHome)
    .then(() => {
      $('.loader-wrapper').fadeOut('slow');
    });
}

function fillHome(json) {
  let acf = json[0].acf;
  let infographics = Object.entries(acf.infographics);
  //selecting json area
  let topTitleJSON = json[0].acf.main_title;
  let buttonNextJSON = acf.next_page;

  let homeDescJSON = json[0].acf.main_description;
  //assigning json content to DOM
  topTitle.innerHTML = topTitleJSON;
  homeDesc.innerHTML = homeDescJSON;
  buttonNext.innerHTML = buttonNextJSON;
  let aboutContent = document.getElementById('about-content');

  infographics.forEach(infographic => {
    //creating DOM Elements
    let newGridItem = document.createElement('div');
    let newIGTitle = document.createElement('p');
    let newIG = document.createElement('img');

    //inserting elements inside containerDiv
    newGridItem.appendChild(newIGTitle);
    newGridItem.appendChild(newIG);

    //assigning classnames
    newGridItem.classList.add('grid-item');
    newGridItem.classList.add('double');

    newIGTitle.classList.add('sectionTitle');
    newIGTitle.classList.add('subtitle');
    newIGTitle.classList.add('centred');

    //assigning content to DOM Elements
    if (infographic[1].image) {
      newIG.src = infographic[1].image;
      newIGTitle.innerHTML = infographic[1].title;
      aboutContent.appendChild(newGridItem);
    }
  });
}

fetchContact(link_);
