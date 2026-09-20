
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

// NAV MENU

const navBurger = document.querySelector('#navBurger');
const navMenu = document.querySelector('#navMenu');

navBurger.addEventListener('click', toggleNavMenu);

function toggleNavMenu(event) {
  event.preventDefault();
  navMenu.classList.toggle('active');
}

// PROJECT IMAGES HOVER EFFECT

document.querySelectorAll('.project-card-middle').forEach(card => {
  const filterId = card.dataset.filterId;
  const map = document.querySelector(`#${filterId} feDisplacementMap`);
  let raf;

  function animateScale(from, to, duration) {
    cancelAnimationFrame(raf);
    const start = performance.now();
    function tick(now) {
      const t = Math.min((now - start) / duration, 1);
      const value = from + (to - from) * t;
      map.setAttribute('scale', value);
      if (t < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
  }

  card.addEventListener('mouseenter', () => animateScale(0, 70, 350));
  card.addEventListener('mouseleave', () => animateScale(70, 0, 350));
});


