import throttle from 'lodash.throttle';


const localObject = {};

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

fillInTextArea()

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(e) {
 localObject[e.target.name] = e.target.value;
  console.log( localObject);
  localStorage.setItem('feedback-form-state', JSON.stringify(localObject));
}

function fillInTextArea() {
  const saveMessage = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (saveMessage) {
    email.value = saveMessage.email;
    textarea.value = saveMessage.message;
  }
}





