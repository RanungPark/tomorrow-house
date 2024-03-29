const searchModal = document.querySelector('.search-modal');
const searchoverlay = document.querySelector('.overlay');
const searchButton = document.querySelector('.gnb-icon-button.is-search');
const searchModalCloseButton = searchModal.querySelector('.search-modal-form .btn-ghost');
const searchModalHistory = searchModal.querySelector('.search-history')

const searchModalHistoryList = searchModalHistory.querySelector('ol');

const deleteAllButtonSearchModal = searchModalHistory.querySelector('.search-history-header button');

const deleteButtonSearchModalList = searchModalHistoryList.querySelectorAll('.delete-button');

function openSearchModal() {
  searchModal.classList.add('is-active');
  searchoverlay.classList.add('is-active');
}

function closeSearchModal() {
  searchModal.classList.remove('is-active');
  searchoverlay.classList.remove('is-active');
}

function deleteAllSearchModalHistories() {
  searchModalHistoryList.innerHTML = '';
}

function deleteSearchModalHistory() {
  const itemToDeleteSearchModal = this.parentNode;
  searchModalHistoryList.removeChild(itemToDeleteSearchModal);
}

searchButton.addEventListener('click', openSearchModal);
searchModalCloseButton.addEventListener('click', closeSearchModal);

deleteAllButtonSearchModal.addEventListener('click', deleteAllSearchModalHistories);



deleteButtonSearchModalList.forEach((button) => {
  button.addEventListener('click', deleteSearchModalHistory);
});
