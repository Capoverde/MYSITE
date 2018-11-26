// ------ CACHING DOM ------- //

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// ---- Initial state of the menu ---- //

let showMenu = false;

// ----- functions ---- //
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    //  set menu
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    //  set menu
    showMenu = false;
  }
}

// ---- eventListeners --- //

menuBtn.addEventListener('click', toggleMenu);

// ---- CONTACT CARD ---- //
const card = document.querySelector('.card');
const trigger = document.getElementById('send__message-trigger');
const send = document.getElementById('send__message');
const thanks = document.querySelector('.thank__you__card');

function cardSlide() {
  card.classList.add('show-card');
}

function sendMessage(e, thanksRemover) {
  e.preventDefault();
  card.classList.remove('show-card');
  thanks.classList.add('showThx');

  function thanksRemover() {
    thanks.classList.remove('showTHx');
    thanks.classList.add('thanksUp');
  }

  setTimeout(thanksRemover, 3000);
}

trigger.addEventListener('click', cardSlide);
send.addEventListener('click', sendMessage);
