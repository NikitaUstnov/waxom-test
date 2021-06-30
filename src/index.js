import './less/main.less';
const mySiema = new Siema();

//for header
const openHederNavMenuBtnRef = document.querySelector('.open-js');
const closeHederNavMenuBtnRef = document.querySelector('.close-js');
const siteNavRef = document.querySelector('.site-nav ');

openHederNavMenuBtnRef.addEventListener('click', () => {
  siteNavRef.classList.add('is-open');
  closeHederNavMenuBtnRef.classList.add('is-open');
});

closeHederNavMenuBtnRef.addEventListener('click', () => {
  siteNavRef.classList.remove('is-open');
  closeHederNavMenuBtnRef.classList.remove('is-open');
});

//for main
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
