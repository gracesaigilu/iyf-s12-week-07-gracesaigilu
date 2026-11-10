// js/storage.js

const STORAGE_KEY = 'my_todos';

function loadTodos() {
  try {
      const data = localStorage.getItem(STORAGE_KEY);
          return data ? JSON.parse(data) : [];
            } catch (error) {
                console.error('Failed to load todos from storage', error);
                    return [];
                      }
                      }

                      function saveTodos(todos) {
                        try {
                            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
                              } catch (error) {
                                  console.error('Failed to save todos to storage', error);
                                    }
                                    }

                                    module.exports = {
                                      loadTodos,
                                        saveTodos
                                        };
                                        