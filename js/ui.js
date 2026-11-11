export function renderTasks(tasks, currentFilter, onToggle, onDelete) {
          const todoList = document.getElementById('todo-list');
            const itemCounts = document.getElementById('item-count');
              if (!todoList) return;

                todoList.innerHTML = '';

                  const filteredTasks = tasks.filter(task => {
                      if (currentFilter === 'active') return !task.completed;
                          if (currentFilter === 'completed') return task.completed;
                              return true;
                                });

                                  filteredTasks.forEach(task => {
                                      const li = document.createElement('li');
                                          li.className = `todo-item ${task.completed ? 'completed' : ''}`;
                                              li.dataset.id = task.id;

                                                  const span = document.createElement('span');
                                                      span.textContent = task.text;

                                                          const deleteBtn = document.createElement('button');
                                                              deleteBtn.className = 'delete-btn';
                                                                  deleteBtn.textContent = 'Delete';

                                                                      li.appendChild(span);
                                                                          li.appendChild(deleteBtn);

                                                                              li.addEventListener('click', (e) => {
                                                                                    if (e.target.classList.contains('delete-btn')) {
                                                                                            onDelete(task.id);
                                                                                                  } else {
                                                                                                          onToggle(task.id);
                                                                                                                }
                                                                                                                    });

                                                                                                                        todoList.appendChild(li);
                                                                                                                          });

                                                                                                                            if (itemCounts) {
                                                                                                                                const activeCount = tasks.filter(task => !task.completed).length;
                                                                                                                                    itemCounts.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
                                                                                                                                      }
                                                                                                                                      

}