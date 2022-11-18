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
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase() || email.value === '') {
    error.textContent = 'Please enter email in lower case';
    return;
  }
  form.submit();
});

// Local Storage
const username = document.querySelector('#username');
const message = document.querySelector('#message');

function storeData() {
  const formData = {
    username: username.value,
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('formData', JSON.stringify(formData));
}
function getData() {
  if (!localStorage.getItem('formData')) {
    storeData();
  }