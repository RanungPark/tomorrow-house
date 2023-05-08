const gnbSearch = document.querySelector('.gnb-search');
const gnbSearchInput = gnbSearch.querySelector('input');
const gnbSearchHistory = gnbSearch.querySelector('.search-history');

const gnbSearchHistoryList = gnbSearchHistory.querySelector('ol');

const deleteAllButton = gnbSearchHistory.querySelector('.search-history-header button');

const deleteButtonList = gnbSearchHistoryList.querySelectorAll('.delete-button');

function closeGnbSearchHistoryFunction() {
  gnbSearchHistory.classList.remove('is-active');
  window.removeEventListener('click', closeGnbSearchHistory);
}

function openGnbSearchHistory() {
  if (gnbSearchHistoryList.children.length === 0) {
    return;
  }

  if (!gnbSearchHistory.classList.contains('is-active')) {
    window.addEventListener('click', closeGnbSearchHistory);
  }
  gnbSearchHistory.classList.add('is-active');
}

function closeGnbSearchHistory(e) {
  if (!gnbSearch.contains(e.target)) {
    closeGnbSearchHistoryFunction();
  }
}

function deleteAllSearchHistories() {
  gnbSearchHistoryList.innerHTML = '';
  closeGnbSearchHistoryFunction();
}

function deleteSearchHistory(e) {
  e.stopPropagation()
  const itemToDelete = this.parentNode;
  gnbSearchHistoryList.removeChild(itemToDelete);

  if (gnbSearchHistoryList.children.length === 0) {
    closeGnbSearchHistoryFunction();
  }
}

gnbSearchInput.addEventListener('focus', openGnbSearchHistory);

deleteAllButton.addEventListener('click', deleteAllSearchHistories);

deleteButtonList.forEach((button) => {
  button.addEventListener('click', deleteSearchHistory);
});
