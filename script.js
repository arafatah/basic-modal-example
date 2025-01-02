/* 'use strict';

const modal = document.querySelector('.modal');
const btnCLoseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);
  btnCLoseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Control' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

 */

/* use key listener to addEventListener ex: 
document.addEventListener('keydown', function(e)
console.log(e.key) // to find which keys pressed.
)

3 types of keys, 
keypress - when user click, it will work reapidly. 
keyup - when user press and realse the key, up the finger from key, it will work then. 
keydown - when user key down or press the key, it will work imedietly.  */

'use strict';

const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');

// Function to toggle modal visibility
const toggleModal = function () {
  modal.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
};

// Add event listener to each "Show Modal" button
btnsOpenModal.forEach(btn => btn.addEventListener('click', toggleModal));

// Add event listeners for close actions
btnCloseModal.addEventListener('click', toggleModal);
overlay.addEventListener('click', toggleModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Control' && !modal.classList.contains('hidden')) {
    toggleModal();
  }
});