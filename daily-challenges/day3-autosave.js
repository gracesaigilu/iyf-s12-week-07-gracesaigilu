// Day 3: Form Auto-Save Challenge
export function initFormAutoSave(formEl, storageKey = 'autosave_form_data') {
  const inputs = formEl.querySelectorAll('input, textarea, select');

  // Recover data on load
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (savedData) {
    inputs.forEach(input => {
      if (savedData[input.name] !== undefined) {
        input.value = savedData[input.name];
      }
    });
  }

  // Auto-save every 5 seconds
  setInterval(() => {
    const data = {};
    inputs.forEach(input => {
      if (input.name) data[input.name] = input.value;
    });
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, 5000);

  // Clear on submit
  formEl.addEventListener('submit', () => {
    localStorage.removeItem(storageKey);
  });
}
