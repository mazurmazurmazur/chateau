let linkEn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/winemaking&slug=en';
let linkCn =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/winemaking&slug=en-copy';
let linkYue =
  'https://privatelabels.wine/dashboard/?rest_route=/wp/v2/winemaking&slug=en-copy-2';

let link_ = chooseLangLink(linkEn, linkCn, linkYue);

let topTitle = document.getElementById('topTitle');
let postTitle = document.getElementById('postTitle');
let aboutContent = document.getElementById('about-content');

let postDesc = document.getElementById('postDesc');
let postImg = document.getElementById('postImg');
let forwardBtn = document.getElementById('buttonForward');
let backBtn = document.getElementById('buttonBack');
let titleGallery = document.getElementById('titleGallery');
let galleryDesc = document.getElementById('galleryDesc');
let sliderSection = document.getElementById('sliderSection');

function fetchWinemaking(link) {
  fetch(link)
    .then(res => res.json())
    .then(fillWinemaking)
    .then(launchLightGallery)
    .then(launchSlider)
    .then(() => {
      $('.loader-wrapper').fadeOut('slow');
    });
}

function fillWinemaking(json) {
  let acf = json[0].acf;
  //selecting json elems
  let topTitleJSON = acf.main_title;
  let postTitleJSON = acf.winemaking_post.post_title;
  let postImgJSON = acf.winemaking_post.post_image;
  let postDescJSON = acf.winemaking_post.post_text;
  let titleGalleryJSON = acf.vineyards_gallery.title_of_gallery;
  let descGalleryJSON = acf.vineyards_gallery.description_of_gallery;
  let vineyards = Object.entries(acf.vineyards_gallery.gallery_images); //loopable chunk of json file
  let infographics = Object.entries(acf.infographics); //loopable chunk of json file

  //assigning json content to DOM
  // topTitle.innerHTML = topTitleJSON;
  postTitle.innerHTML = postTitleJSON;
  postDesc.innerHTML = postDescJSON;
  postImg.src = postImgJSON;
  backBtn.innerHTML = acf.previous_page_button;
  forwardBtn.innerHTML = acf.next_page_button;
  titleGallery.innerHTML = titleGalleryJSON;
  galleryDesc.innerHTML = descGalleryJSON;

  let counter = 0;

  vineyards.forEach(image => {
    //creating DOM Elements
    let newSliderItem = document.createElement('div');
    let newDiv = document.createElement('div');
    let newImage = document.createElement('img');

    //inserting elements inside containerDiv
    newDiv.appendChild(newImage);
    newSliderItem.appendChild(newDiv);

    //assigning classnames
    newSliderItem.classList.add('slider-div');

    if (counter == 0) {
      newSliderItem.classList.add('left');
    } else if (counter == 1) {
      newSliderItem.classList.add('center');
    } else if (counter == 2) {
      newSliderItem.classList.add('right');
    } else {
      newSliderItem.classList.add('backPic');
    }

    // assigning content to DOM Elements
    if (image[1]) {
      newImage.src = image[1];
      newSliderItem.setAttribute('data-src', image[1]);
      sliderSection.appendChild(newSliderItem);
    }
    counter++;
  });

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
      newIGTitle.innerHTML = infographic[1].title;
      newIG.src = infographic[1].image;
      aboutContent.prepend(newGridItem);
    }
  });
}

fetchWinemaking(link_);

function launchLightGallery() {
  // LAUNCH LIGHTGALLERY

  lightGallery(document.querySelector('.slider'), {
    selector: '.slider-div',
    download: false
  });
  //END LIGHTGALLERY
}

if (window.matchMedia('screen and (max-width: 900px)').matches) {
  document.getElementById('labelSVG').src = '../images/label-mobile.svg';
}

function launchSlider() {
  (function($, document, window, undefined) {
    $.fn.MWslider = function(config) {
      this.elements = this.find('.slider-div');
      this.center = this.elements.filter('.center').index();

      var that = this,
        config = $.fn.MWslider.getConfig(config);

      $.fn.MWslider.setHeight(that);
      $(window).on('resize', function() {
        $.fn.MWslider.setHeight(that);
      });

      var move = $.fn.MWslider.moveSlider;
      $.fn.MWslider.addNav(that, move, config);

      // Paralax efect

      // that.mousemove(function(e) {
      //   $.fn.MWslider.mouseFollow.call(that, e, this.elements);
      // });
      return that;
    };

    // Ustawia responsywną wysokość slider'a

    $.fn.MWslider.setHeight = function(that) {
      var width = that.width(),
        proportion =
          parseInt(that.css('max-width')) / parseInt(that.css('max-height'));

      that.css('height', width / proportion);
    };

    // Dodawanie nawigacji

    $.fn.MWslider.addNav = function(that, f1, settings) {
      var leftArrow = $(
          "<div class='navContainer leftNavContainer'><div class='" +
            settings.nav.leftClass +
            "'></div>"
        ).prependTo(that),
        rightArrow = $(
          "<div class='navContainer rightNavContainer'><div class='" +
            settings.nav.rightClass +
            "'></div>"
        ).appendTo(that);
      leftArrow.on('click', function() {
        f1(that, 'left', settings);
      });
      rightArrow.on('click', function() {
        f1(that, 'right', settings);
      });
    };

    // Ustawianie configu

    $.fn.MWslider.getConfig = function(config) {
      var defaultConfig = {
        duration: 500,
        nav: {
          leftClass: 'leftClass',
          rightClass: 'rightClass'
        }
      };

      if (!(config instanceof Object)) {
        return $.extend({}, defaultConfig, config);
      } else {
        return $.extend({}, defaultConfig);
      }
    };

    // Przesuwanie slidera

    $.fn.MWslider.checkPosition = function(cent, len) {
      var left = cent - 1 < 0 ? len - 1 : cent - 1,
        right = cent + 2 > len ? 0 : cent + 1,
        prevleft = left - 1 < 0 ? len - 1 : left - 1,
        prevright = right + 2 > len ? 0 : right + 1,
        prevprevright = prevright + 2 > len ? 0 : prevright + 1,
        prevprevleft = prevleft - 1 < 0 ? len - 1 : prevleft - 1;

      return [
        left,
        cent,
        right,
        prevleft,
        prevright,
        prevprevright,
        prevprevleft
      ];
    };

    $.fn.MWslider.moveSlider = function(that, side, config) {
      var len = that.elements.length;

      if (side === 'right')
        that.center = that.center + 2 > len ? 0 : that.center + 1;
      else if (side === 'left')
        that.center = that.center - 1 < 0 ? len - 1 : that.center - 1;

      var pos = $.fn.MWslider.checkPosition(that.center, len);

      that.elements.removeClass();
      that.elements.addClass('slider-div');

      that.elements.eq(pos[2]).addClass('right');
      that.elements.eq(pos[1]).addClass('center');
      that.elements.eq(pos[0]).addClass('left');

      for (let i = 3; i < pos.length; i++) {
        that.elements.eq(pos[i]).addClass('backPic');
      }
    };
    $(document).ready(function() {
      $('.slider').MWslider();
    });
  })(jQuery, document, window);
}
