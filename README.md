# Modular ES6 To-Do Application (Week 7)

A fully refactored, testable, and modularized To-Do List application built with vanilla JavaScript (ES6 modules), separating business logic, state management, storage, and DOM manipulation.

## 🚀 Features
- **Strictly Modular Architecture:** Code is broken down into isolated ES6 modules (`.js`).
- **Pure Functions:** Core logic functions are completely free of side effects, making them easy to test.
- **Centralized State Management:** State is cleanly managed and synchronized with local storage.
- **Dynamic DOM Rendering:** Efficiently renders filtered lists (All, Active, Completed) and updates counts dynamically.
- **Persistent Storage:** Tasks are automatically saved and loaded using the browser's `localStorage`.

---

## 📁 Project Structure

```text
├── index.html          # Main HTML entry point (loads as module)
├── style.css           # Application styles
├── js/
│   ├── app.js          # Main entry point & event listeners
│   ├── state.js        # Central state and storage coordination
│   ├── storage.js      # LocalStorage API handler
│   ├── todo-logic.js   # Pure functions for task operations
│   └── ui.js           # DOM manipulation and rendering
└── README.md
