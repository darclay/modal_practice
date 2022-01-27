'use strict';

const modal = document.querySelector('.detailDiv');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');
const openBtn = document.querySelectorAll('.openModal');

const handleOpen = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
const handleClose = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < openBtn.length; i++){
openBtn[i].addEventListener('click', handleOpen);
}

closeBtn.addEventListener('click', handleClose);
overlay.addEventListener('click', handleClose);

//EXAMPLE OF GLOBAL KEYBOARD EVENTS:
document.addEventListener('keydown', function (ev) {
  if (ev.key === "Escape"){handleClose()};
})