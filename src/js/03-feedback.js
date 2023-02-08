import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const DATA_FORM_STORAGE_KEY = 'feedback-form-state';

const formData = {};

onRestoreDataField();

formRef.addEventListener('submit', onSubmitForm);
formRef.addEventListener('input', throttle(onTextInput, 500));

function onSubmitForm(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = formRef;

  console.log({ email: email.value, message: message.value });

  localStorage.removeItem(DATA_FORM_STORAGE_KEY);
  formRef.reset();
}

function onTextInput(e) {
  formData[e.target.name] = e.target.value;

  setDataForm(formData);
}

function setDataForm() {
  localStorage.setItem(DATA_FORM_STORAGE_KEY, JSON.stringify(formData));
}

function onRestoreDataField() {
  const savedDataForm = JSON.parse(localStorage.getItem(DATA_FORM_STORAGE_KEY));

  if (savedDataForm?.email) {
    formRef.email.value = savedDataForm.email;
  }

  if (savedDataForm?.message) {
    formRef.message.value = savedDataForm.message;
  }
}
