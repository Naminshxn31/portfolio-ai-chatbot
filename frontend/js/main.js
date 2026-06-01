// ===== NAVIGATION =====
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

function switchSection(target) {
  sections.forEach(s => s.classList.remove('active-section'));
  navItems.forEach(n => n.classList.remove('active'));
  document.getElementById(target).classList.add('active-section');
  document.querySelector(`[data-section="${target}"]`).classList.add('active');
}

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const target = item.dataset.section;
    switchSection(target);
    if (window.innerWidth <= 768) closeSidebar();
  });
});

// ===== MOBILE SIDEBAR =====
const sidebar = document.getElementById('sidebar');
const menuBtn = document.getElementById('menuBtn');
const overlay = document.getElementById('overlay');

function openSidebar() {
  sidebar.classList.add('open');
  overlay.classList.add('active');
}
function closeSidebar() {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
}
menuBtn?.addEventListener('click', openSidebar);
overlay.addEventListener('click', () => {
  closeSidebar();
  closeChat();
});

// ===== LOAD SECTIONS =====
async function loadSection(name) {
  const res = await fetch(`sections/${name}.html`);
  const html = await res.text();
  document.getElementById(`${name}-content`).innerHTML = html;
  if (name === 'projects') renderProjects();
}

['about', 'skills', 'experience', 'projects'].forEach(loadSection);
