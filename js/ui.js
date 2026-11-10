// js/ui.js

function renderTodos(todos, onToggle, onDelete) {
  const todoListEl = document.getElementById('todo-list');
    if (!todoListEl) return;

      todoListEl.innerHTML = '';

        todos.forEach(todo => {
            const li = document.createElement('li');
                li.className = `todo-item ${todo.completed ? 'completed' : ''}`;

                    const checkbox = document.createElement('input');
                        checkbox.type = 'checkbox';
                            checkbox.checked = todo.completed;
                                checkbox.addEventListener('change', () => onToggle(todo.id));

                                    const span = document.createElement('span');
                                        span.textContent = todo.text;

                                            const deleteBtn = document.createElement('button');
                                                deleteBtn.textContent = 'Delete';
                                                    deleteBtn.addEventListener('click', () => onDelete(todo.id));

                                                        li.appendChild(checkbox);
                                                            li.appendChild(span);
                                                                li.appendChild(deleteBtn);

                                                                    todoListEl.appendChild(li);
                                                                      });
                                                                      }

                                                                      function getTodoInput() {
                                                                        const inputEl = document.getElementById('todo-input');
                                                                          return inputEl ? inputEl.value : '';
                                                                          }

                                                                          function clearTodoInput() {
                                                                            const inputEl = document.getElementById('todo-input');
                                                                              if (inputEl) {
                                                                                  inputEl.value = '';
                                                                                    }
                                                                                    }

                                                                                    module.exports = {
                                                                                      renderTodos,
                                                                                        getTodoInput,
                                                                                          clearTodoInput
                                                                                          };
                                                                                          