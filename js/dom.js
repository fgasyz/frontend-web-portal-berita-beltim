function makeCarouselCard(swiperName) {
  var swiper = new Swiper(swiperName, {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      575: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1250: {
        slidesPerView: 5,
        spaceBetween: 80,
      }
    },
  });
  return swiper;
}

function makeNewsCardEffect() {
  const newscards = document.getElementsByClassName('opd-web-effect');
  for(let i= 0; i<newscards.length; i++) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > (window.innerHeight / 3 * 2)) {
        newscards[i].classList.add('opd-web-effect-active');
      }
    })
  }
}

function makeAnnouncementEffect() {
  const announcementcards = document.getElementsByClassName('announcement-effect');
  for(let i= 0; i<announcementcards.length; i++) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > (window.innerHeight / 3 * 2)) {
        announcementcards[i].classList.add('announcement-effect-active');
      }
    })
  }
}

function makeBegalorEffect() {
  const begalorcards = document.getElementsByClassName('begalor-effect');
  for(let i= 0; i<begalorcards.length; i++) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > (window.innerHeight / 2 * 4)) {
        begalorcards[i].classList.add('begalor-effect-active');
      }
    })
  }
}

function makeOpdInformationEffect() {
  const opdInformationcards = document.getElementsByClassName('opd-information-effect');
  for(let i= 0; i<opdInformationcards.length; i++) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > (window.innerHeight / 2 * 6)) {
        opdInformationcards[i].classList.add('opd-information-effect-active');
      }
    })
  }
}

function makeTextEllipsisForMainNews() {
  var $textContent = $('.text-ellipsis-main-news p');
  var textContainer = $('.text-ellipsis-main-news').height();
  while ($textContent.outerHeight() > textContainer) {
      $textContent.text(function (index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
      });
  }
}

function makeTextEllipsisForOpdNews() {
  var $textContent = $('.text-ellipsis-web-opd p');
  var textContainer = $('.text-ellipsis-web-opd').height();
  while ($textContent.outerHeight() > textContainer) {
      $textContent.text(function (index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
      });
  }
}

function makeTextEllipsisForAnnouncement() {
  var $textContent = $('.text-ellipsis-announcement p');
  var textContainer = $('.text-ellipsis-announcement').height();
  while ($textContent.outerHeight() > textContainer) {
      $textContent.text(function (index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
      });
  }
}

function makeTextEllipsisForAnnouncement() {
  var $textContent = $('.text-ellipsis-info-opd p');
  var textContainer = $('.text-ellipsis-info-opd').height();
  while ($textContent.outerHeight() > textContainer) {
      $textContent.text(function (index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
      });
  }
}

function makeScroolTopButton() {
  const buttonScrollTop = document.getElementById('scroll-top');
  window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      buttonScrollTop.style.display = 'block';
    }else {
      buttonScrollTop.style.display = 'none';
    }
  }) 
}

function backtoTopFunction() {
  const buttonScrollTop = document.getElementById('scroll-top');
  buttonScrollTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  })
}