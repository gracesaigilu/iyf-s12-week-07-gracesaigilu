// js/todo-logic.js - Pure functions (no DOM, no localStorage)

export function addTask(tasks, text) {
    if (!text || text.trim() === '') return tasks;
        const newTask = {
                id: Date.now(),
                        text: text.trim(),
                                completed: false
                                    };
                                        // Return a new array to prevent mutating the original array
                                            return [...tasks, newTask];
                                            }

                                            export function toggleTask(tasks, id) {
                                                return tasks.map(task => 
                                                        task.id === id ? { ...task, completed: !task.completed } : task
                                                            );
                                                            }

                                                            export function deleteTask(tasks, id) {
                                                                return tasks.filter(task => task.id !== id);
                                                                }

                                                                export function filterTasks(tasks, currentFilter) {
                                                                    return tasks.filter(task => {
                                                                            if (currentFilter === 'active') return !task.completed;
                                                                                    if (currentFilter === 'completed') return task.completed;
                                                                                            return true;
                                                                                                });
                                                                                                }
                                                                                                