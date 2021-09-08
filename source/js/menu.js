let navMain = document.querySelector('.main-nav');
let navToggle = document.querySelector('.main-nav__toggle');

let additemWindow = document.querySelector('.popup__wrapper');
let windowOpenButton = document.querySelectorAll('.price__inner-link');
let buttonClose = document.querySelectorAll('.popup__close');
let sendFormButton = additemWindow.querySelector('.popup__button');
let successWindow = document.querySelector('.popup__success');
let form = document.querySelector('.popup__form');

let customerTel = form.querySelector('[name=popup-tel]');
let customerMail = form.querySelector('[name=popup-email]');
let isStorageSupport = true;
let telStorage = '';
let mailStorage = '';

try {
  telStorage = localStorage.getItem('customerTel');
  mailStorage = localStorage.getItem('customerMail');
} catch (err) {
  isStorageSupport = false;
}


/* Menu popup start */

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

/* Menu popup end */

/* Modal form start */

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

let modalOpen = function () {
  additemWindow.classList.add('popup__wrapper--opened');
}

let modalClose = function () {
  additemWindow.classList.remove('popup__wrapper--opened');
}


let successModallOpen = function () {
  if (isStorageSupport) {
    localStorage.setItem('customerTel', customerTel.value);
    localStorage.setItem('customerMail', customerMail.value);
  }
  successWindow.classList.add('popup__success--opened');
  modalClose();
}

for (let item of windowOpenButton) {
  item.addEventListener('click', () => {
    modalOpen();
    customerTel.focus();
    if (telStorage || mailStorage) {
      customerTel.value = telStorage;
      customerMail.value = mailStorage;
    }
  });
}

for (let item of buttonClose) {
  item.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (additemWindow.classList.contains('popup__wrapper--opened')) {
      modalClose();
    } else {
      successWindow.classList.remove('popup__success--opened');
    }
  });
}

window.addEventListener('keydown', function (evt) {

  if (isEscEvent(evt)) {
    if (additemWindow.classList.contains('popup__wrapper--opened')) {
      modalClose();
    }
    if (successWindow.classList.contains('popup__success--opened')) {
      successWindow.classList.remove('popup__success--opened');
    }
  }
});

form.addEventListener('submit', successModallOpen);

/* Modal form end */
