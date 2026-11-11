import { state } from './state.js';

const STORAGE_KEY = 'WEEK7_TODOS';

export function saveStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tasks));
  }

  export function loadStorage() {
    const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : [];
      }
      