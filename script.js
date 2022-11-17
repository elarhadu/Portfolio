/* eslint-disable linebreak-style */
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));


// Form Validation
const form = document.querySelector(".form")
const email = document.querySelector(".email")

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value !== email.value.toLowerCase() || email.value === '') {
    errorMessage.textContent = 'Please enter your email in lower cases';
    email.classList.add('invalid');
    return;
  }
  email.classList.remove('invalid');
  email.classList.add('valid');
})