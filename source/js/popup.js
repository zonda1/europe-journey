let additemWindow = document.querySelector('.popup__wrapper');
let windowOpenButton = document.querySelectorAll('.price__inner-link');
let buttonClose = document.querySelectorAll('.popup__close');
let sendFormButton = additemWindow.querySelector('.popup__button');
let successWindow = document.querySelector('.popup__success');
let form = document.querySelector('.popup__form');
/* let bookmarkColor = document.querySelector('.bookmark-link');
let bookmarkButton = document.querySelectorAll('.bookmarks-button');
let cartColor = document.querySelector('.cart-link'); */

let modalOpen = function () {
  additemWindow.classList.add('popup__wrapper--opened');
}

let modalClose = function () {
  additemWindow.classList.remove('popup__wrapper--opened');
}


let successModallOpen = function () {
  successWindow.classList.add('popup__success--opened');
  modalClose();
}

for (let item of windowOpenButton) {
  item.addEventListener('click', modalOpen);
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


form.addEventListener('submit', successModallOpen);
