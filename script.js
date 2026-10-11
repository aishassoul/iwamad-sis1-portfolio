
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.dataset.theme === 'dark';

  document.documentElement.dataset.theme = isDark ? 'light' : 'dark';

  themeToggle.textContent = isDark
    ? 'Switch to dark mode'
    : 'Switch to light mode';

  themeToggle.setAttribute('aria-pressed', String(!isDark));
});

const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const messageError = document.getElementById('message-error');
  const formStatus = document.getElementById('form-status');

  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formStatus.textContent = '';

  let isValid = true;

  if (name === '') {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  if (email === '') {
    emailError.textContent = 'Please enter your email address.';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message === '') {
    messageError.textContent = 'Please enter your message.';
    isValid = false;
  }

  if (isValid) {
    formStatus.textContent =
      'Thank you! Your message has been received.';
    contactForm.reset();
  }
});
