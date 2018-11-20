function init() {
  window.addEventListener('scroll', resizeHeader);
  openMenu();
  scrollDown();
  popupShow();
}

function resizeHeader() {
  var distanceY = window.pageYOffset || document.documentElement.scrollTop;
  var shrink = 100;
  var header = document.querySelector('.js-header');

  if(distanceY > shrink) {
    header.classList.add('small');
  } else {
    header.classList.remove('small');
  }
}

function openMenu() {
  var menubtn = document.querySelector('.js-menu-btn');
  var collapsedMenu = document.querySelector('.js-collapsed-menu');

  menubtn.addEventListener('click', function(){
    collapsedMenu.classList.toggle('active');
  });
}

function scrollDown() {
  var headerHeight = document.querySelector('.js-header').clientHeight;
  var scrollBtn = document.querySelector('.js-scroll-down');
  var windowHeight = window.innerHeight;

  scrollBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({
      top: windowHeight - headerHeight,
      behavior: 'smooth'
    });
  });
}

addEventListener('load', init);
