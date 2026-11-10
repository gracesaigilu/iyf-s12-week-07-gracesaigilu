// js/ui.js - Handles DOM rendering

import { filterTasks } from './todo-logic.js';

export function render(state, { onToggle, onDelete }) {
    const { tasks, currentFilter } = state;
        const todoList = document.getElementById('todo-list');
            const itemCount = document.getElementById('item-count');

                todoList.innerHTML = '';
                    const filteredTasks = filterTasks(tasks, currentFilter);

                        filteredTasks.forEach(task => {
                                const li = document.createElement('li');
                                        li.className = `todo-item ${task.completed ? 'completed' : ''}`;
                                                
                                                        const span = document.createElement('span');
                                                                span.textContent = task.text;
                                                                        span.addEventListener('click', () => onToggle(task.id));

                                                                                const deleteBtn = document.createElement('button');
                                                                                        deleteBtn.textContent = 'Delete';
                                                                                                deleteBtn.className = 'delete-btn';
                                                                                                        deleteBtn.addEventListener('click', (e) => {
                                                                                                                    e.stopPropagation();
                                                                                                                                onDelete(task.id);
                                                                                                                                        });

                                                                                                                                                li.appendChild(span);
                                                                                                                                                        li.appendChild(deleteBtn);
                                                                                                                                                                todoList.appendChild(li);
                                                                                                                                                                    });

                                                                                                                                                                        const activeCount = tasks.filter(t => !t.completed).length;
                                                                                                                                                                            itemCount.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
                                                                                                                                                                            }
                                                                                                                                                                            