import './index.css';

function requireAll(icon) {
  icon.keys().forEach(icon);
}

requireAll(require.context('../src/svg', true, /\.svg$/));
// Burger menu
const menu = document.querySelector('.header__menu');
const menuButton = document.querySelector('.header__menu-button');
const menuOverlay = document.querySelector('.overlay');
const cross= menuButton.querySelector('.cross');
const toggleMenuButton = () => {
  menu.classList.toggle('header__menu_opened');
  document.body.classList.toggle('scroll-lock');
  menuOverlay.classList.toggle('overlay_active');
  cross.classList.toggle('cross_active');
};

const closeMenu = (e) => {
  if (e.target.classList.contains('header__menu-link') || e.target.classList.contains('overlay')) {
    menuButton.classList.remove('header__menu-button_opened');
    menu.classList.remove('header__menu_opened');
    menuOverlay.classList.remove('overlay_active');
    cross.classList.remove('cross_active');
    document.body.classList.remove('scroll-lock');
  }
};

menuButton.addEventListener('click', toggleMenuButton);
menu.addEventListener('click', closeMenu);
menuOverlay.addEventListener('click', closeMenu);