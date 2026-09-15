
// PRELOADER

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  
  preloader.classList.remove('is-inview');
});

// CURSOR

const cursor = document.querySelector('.cursor');

const halfWidth = cursor.offsetWidth / 2;
const halfHeight = cursor.offsetHeight / 2;

window.addEventListener('pointermove', (e) => {
  const x = e.clientX - halfWidth;
  const y = e.clientY - halfHeight;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});
