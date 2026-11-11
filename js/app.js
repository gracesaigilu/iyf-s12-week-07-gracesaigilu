import { state, setTasks, setFilter } from './state.js';
import { loadStorage, saveStorage } from './storage.js';
import { createTask, addTask, removeTask, toggleTask } from './todo-logic.js';
import { renderTasks } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  setTasks(loadStorage());

    const todoForm = document.getElementById('todo-form');
      const todoInput = document.getElementById('todo-input');
        const clearCompletedBtn = document.getElementById('clear-completed');
          const filterButtons = document.querySelectorAll('.filter-btn');

            function updateAndRender() {
                saveStorage();
                    renderTasks(state.tasks, state.currentFilter, handleToggle, handleDelete);
                      }

                        function handleToggle(id) {
                            setTasks(toggleTask(state.tasks, id));
                                updateAndRender();
                                  }

                                    function handleDelete(id) {
                                        setTasks(removeTask(state.tasks, id));
                                            updateAndRender();
                                              }

                                                if (todoForm && todoInput) {
                                                    todoForm.addEventListener('submit', (e) => {
                                                          e.preventDefault();
                                                                const text = todoInput.value.trim();
                                                                      if (!text) return;

                                                                            const newTask = createTask(text);
                                                                                  setTasks(addTask(state.tasks, newTask));
                                                                                        todoInput.value = '';
                                                                                              updateAndRender();
                                                                                                  });
                                                                                                    }

                                                                                                      filterButtons.forEach(btn => {
                                                                                                          btn.addEventListener('click', () => {
                                                                                                                filterButtons.forEach(b => b.classList.remove('active'));
                                                                                                                      btn.classList.add('active');
                                                                                                                            setFilter(btn.dataset.filter);
                                                                                                                                  renderTasks(state.tasks, state.currentFilter, handleToggle, handleDelete);
                                                                                                                                      });
                                                                                                                                        });

                                                                                                                                          if (clearCompletedBtn) {
                                                                                                                                              clearCompletedBtn.addEventListener('click', () => {
                                                                                                                                                    setTasks(state.tasks.filter(task => !task.completed));
                                                                                                                                                          updateAndRender();
                                                                                                                                                              });
                                                                                                                                                                }

                                                                                                                                                                  renderTasks(state.tasks, state.currentFilter, handleToggle, handleDelete);
                                                                                                                                                                  });
                                                                                                                                                                  