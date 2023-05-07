const sidebarMenuButton = document.querySelector('.gnb-icon-button.is-menu');
const sidebar = document.querySelector('.sidebar')
const sidebaroverlay = document.querySelector('.overlay');

function openSidebar() {
  sidebar.classList.add('is-active');
  sidebaroverlay.classList.add('is-active');
}

function closeSidebar() {
  sidebar.classList.remove('is-active');
  sidebaroverlay.classList.remove('is-active');
}

sidebarMenuButton.addEventListener('click', openSidebar);

sidebaroverlay.addEventListener('click', closeSidebar);