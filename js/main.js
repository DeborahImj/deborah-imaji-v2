
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

// CONTACT FORM

const form = document.querySelector('.contact-form');
const status = document.querySelector('.form-status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = new FormData(form);

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString()
    });

    if (response.ok) {
      form.reset();
      status.textContent = "Thanks. Your message has been sent. I'll get back to you soon!";
      status.style.color = 'lightgreen';
    } else {
      status.textContent = "Something went wrong. Please try again.";
      status.style.color = 'salmon';
    }
  } catch (err) {
    status.textContent = "Something went wrong. Please check your connection and try again.";
    status.style.color = 'salmon';
  }
});

