const searchModal = document.querySelector('.search-modal');
const searchoverlay = document.querySelector('.overlay');
const searchButton = document.querySelector('.gnb-icon-button.is-search');
const searchMoalCloseButton = searchModal.querySelector('.search-modal-form .btn-ghost');

function openSearchModal() {
  searchModal.classList.add('is-active');
  searchoverlay.classList.add('is-active');
}

function closeSearchModal() {
  searchModal.classList.remove('is-active');
  searchoverlay.classList.remove('is-active');
}

searchButton.addEventListener('click', openSearchModal);
searchMoalCloseButton.addEventListener('click', closeSearchModal);