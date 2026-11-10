// js/app.js

const { getTodos, setTodos } = require('./state');
const { loadTodos, saveTodos } = require('./storage');
const { addTodo, deleteTodo, toggleTodo } = require('./todo-logic');
const { renderTodos, getTodoInput, clearTodoInput } = require('./ui');

function initApp() {
  const initialTodos = loadTodos();
    setTodos(initialTodos);

      render();

        const formEl = document.getElementById('todo-form');
          if (formEl) {
              formEl.addEventListener('submit', (e) => {
                    e.preventDefault();
                          const text = getTodoInput();
                                const currentTodos = getTodos();
                                      const updatedTodos = addTodo(currentTodos, text);
                                            setTodos(updatedTodos);
                                                  saveTodos(updatedTodos);
                                                        clearTodoInput();
                                                              render();
                                                                  });
                                                                    }
                                                                    }

                                                                    function handleToggle(id) {
                                                                      const currentTodos = getTodos();
                                                                        const updatedTodos = toggleTodo(currentTodos, id);
                                                                          setTodos(updatedTodos);
                                                                            saveTodos(updatedTodos);
                                                                              render();
                                                                              }

                                                                              function handleDelete(id) {
                                                                                const currentTodos = getTodos();
                                                                                  const updatedTodos = deleteTodo(currentTodos, id);
                                                                                    setTodos(updatedTodos);
                                                                                      saveTodos(updatedTodos);
                                                                                        render();
                                                                                        }

                                                                                        function render() {
                                                                                          const currentTodos = getTodos();
                                                                                            renderTodos(currentTodos, handleToggle, handleDelete);
                                                                                            }

                                                                                            document.addEventListener('DOMContentLoaded', initApp);
                                                                                            