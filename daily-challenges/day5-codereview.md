# Day 5: Code Review - Weather Dashboard

## Review Checklist & Improvements Needed

1. **Error Handling:**
   - *Current Status:* Missing `try/catch` blocks on network fetch requests.
   - *Improvement:* Add robust error handling to gracefully display a message to the user if the weather API fails.

2. **Code Organization:**
   - *Current Status:* All logic is written inside a single monolithic script file.
   - *Improvement:* Split the code into modules (`api.js`, `ui.js`, `app.js`) following clean separation of concerns.

3. **Readability & Maintainability:**
   - *Current Status:* Variables use short single-letter names (e.g., `d`, `res`).
   - *Improvement:* Rename variables to descriptive, meaningful names (e.g., `weatherData`, `response`).
