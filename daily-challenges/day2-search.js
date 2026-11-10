// Day 2: Recent Searches Challenge
export function initRecentSearches(inputEl, dropdownEl, maxSaved = 5) {
  let searches = JSON.parse(localStorage.getItem('recentSearches')) || [];

  function saveSearch(query) {
    if (!query.trim()) return;
    searches = [query, ...searches.filter(s => s !== query)].slice(0, maxSaved);
    localStorage.setItem('recentSearches', JSON.stringify(searches));
    renderDropdown();
  }

  function renderDropdown() {
    dropdownEl.innerHTML = searches.map(s => `<div class="search-item">${s}</div>`).join('');
  }

  inputEl.addEventListener('change', (e) => saveSearch(e.target.value));
  renderDropdown();
}
