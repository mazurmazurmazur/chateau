let linkEn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/about_us&slug=en';
let linkCn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/about_us&slug=en-copy';
let linkYue =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/about_us&slug=en-copy-2';

let link_ = chooseLangLink(linkEn, linkCn, linkYue);

let topTitle = document.getElementById('topTitle');
let aboutDesc = document.getElementById('aboutDesc');
let historyTitle = document.getElementById('historyTitle');
let historySVG = document.getElementById('historySVG');
let forwardBtn = document.getElementById('buttonForward');
let backBtn = document.getElementById('buttonBack');
let titleGallery = document.getElementById('titleGallery');
let aboutTeamDiv = document.getElementById('about-team');

function fetchAbout(link) {
  fetch(link)
    .then(res => res.json())
    .then(fillAbout)
    .then(() => {
      $('.loader-wrapper').fadeOut('slow');
    });
}

function fillAbout(json) {
  let acf = json[0].acf;
  //selecting json elems
  let topTitleJSON = acf.main_title;
  let aboutDescJSON = acf.main_description;
  let historyTitleJSON = acf.history.title_of_history;
  let historyImgJSON = acf.history.history_image;
  let titleGalleryJSON = acf.team_gallery.title_of_gallery;

  let team = Object.entries(acf.team_gallery.images_group); //loopable chunk of json file

  //assigning json content to DOM
  topTitle.innerHTML = topTitleJSON;
  historyTitle.innerHTML = historyTitleJSON;
  aboutDesc.innerHTML = aboutDescJSON;
  historySVG.src = historyImgJSON;
  backBtn.innerHTML = acf.previous_page_button;
  forwardBtn.innerHTML = acf.next_page_button;
  titleGallery.innerHTML = titleGalleryJSON;

  let counter = 0;

  team.forEach(employee => {
    //creating DOM Elements
    let newTeamItem = document.createElement('div');
    let newName = document.createElement('p');
    let newPosition = document.createElement('p');
    let newBR = document.createElement('br');

    let newImage = document.createElement('img');

    //   //inserting elements inside containerDiv
    newTeamItem.appendChild(newImage);
    newTeamItem.appendChild(newBR);

    newTeamItem.appendChild(newName);
    newTeamItem.appendChild(newBR);

    newTeamItem.appendChild(newPosition);

    //   //assigning classnames

    newTeamItem.classList.add('grid-item-team');
    newName.classList.add('team-name');
    newPosition.classList.add('team-position');

    //   // assigning content to DOM Elements
    if (employee[1].image) {
      newImage.src = employee[1].image;
      newName.innerHTML = employee[1].names;

      newPosition.innerHTML = employee[1].position;

      aboutTeamDiv.appendChild(newTeamItem);
    }
    counter++;
  });
}

fetchAbout(link_);

if (window.matchMedia('screen and (max-width: 900px)').matches) {
  document.getElementById('historySVG').src = '../images/history-mobile-cn.svg';
}
