function makeCarouselMainNewsCard() {
  var swiper = new Swiper(".mySwiper", {
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
      487: {
        slidesPerView: 1,
        spaceBetween: -70,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: -135,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 290,
      },
      960: {
        slidesPerView: 3,
        spaceBetween: 180,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 180,
      },
      1250: {
        slidesPerView: 4,
        spaceBetween: 200,
      },
      1805: {
        slidesPerView: 5,
      },
    },
  });
  return swiper;
}

function makeCarouselArticleCard() {
  var swiper = new Swiper(".artikelSwiper", {
    slidesPerView: 2,
    spaceBetween: 100,
    autoplay: {
      delay: 2000,
      disableOnInteraction: true,
    },
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
      if(window.scrollY > (window.innerHeight / 2 * 3)) {
        begalorcards[i].classList.add('begalor-effect-active');
      }
    })
  }
}

function makeOpdInformationEffect() {
  const opdInformationcards = document.getElementsByClassName('opd-information-effect');
  for(let i= 0; i<opdInformationcards.length; i++) {
    window.addEventListener('scroll', () => {
      if(window.scrollY > (window.innerHeight / 2 * 5)) {
        opdInformationcards[i].classList.add('opd-information-effect-active');
      }
    })
  }
}

function makeTextEllipsisForMainNewsHeader() {
  var $textContent = $('.text-ellipsis-main-news-header h6');
  var textContainer = $('.text-ellipsis-main-news-header').height();
  while ($textContent.outerHeight() > textContainer) {
      $textContent.text(function (index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
      });
  }
}

function makeTextEllipsisForMainNewsBody() {
  var $textContent = $('.text-ellipsis-main-news-body p');
  var textContainer = $('.text-ellipsis-main-news-body').height();
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

function makeTextEllipsisForOpdInfo() {
  var $textContent = $('.text-ellipsis-info-opd p');
  var textContainer = $('.text-ellipsis-info-opd').height();
  while ($textContent.outerHeight() > textContainer) {
      $textContent.text(function (index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
      });
  }
}

function makeTextEllipsisForArticleHeader() {
  var $textContent = $('.text-ellipsis-article-header h6');
  var textContainer = $('.text-ellipsis-article-header').height();
  while ($textContent.outerHeight() > textContainer) {
      $textContent.text(function (index, text) {
          return text.replace(/\W*\s(\S)*$/, '...');
      });
  }
}

function makeTextEllipsisForArticleBody() {
  var $textContent = $('.text-ellipsis-article-body p');
  var textContainer = $('.text-ellipsis-article-body').height();
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