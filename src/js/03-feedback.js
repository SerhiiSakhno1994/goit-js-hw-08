import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name = email]');
const textarea = document.querySelector('textarea[name = message]');

const data = JSON.parse(localStorage.getItem('feedback-form-state')) ?? { email: '', message: '' };
email.value = data.email;
textarea.value = data.message;

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));


function onFormSubmit(e) {
  e.preventDefault();
  if (!email.value || !textarea.value) {
    alert('Заполните все поля!');
    return;
  }
  console.log(data);
  email.value = '';
  textarea.value = '';
  data.email = '';
  data.message = '';
  localStorage.clear();
}


function onFormInput(e) {
data[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
}


