const burger = document.getElementById('#burger');
const menu = document.getElementById('#menu');

window.addEventListener('click', () => {
  if (menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
  } else {
    menu.classList.add('hidden');
  }
});