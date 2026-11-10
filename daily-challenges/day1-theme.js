// Day 1: Theme Persistence Challenge
export function initThemeToggle(toggleButton, rootElement = document.body) {
  const savedTheme = localStorage.getItem('theme') || 'light';
  rootElement.className = savedTheme;

  toggleButton.addEventListener('click', () => {
    const currentTheme = rootElement.classList.contains('dark') ? 'light' : 'dark';
    rootElement.className = currentTheme;
    localStorage.setItem('theme', currentTheme);
  });
}
