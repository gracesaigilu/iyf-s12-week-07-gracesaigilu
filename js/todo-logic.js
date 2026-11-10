export function addTask(tasks, text) {
  const newTask = {
    id: Date.now().toString(),
    text: text,
    completed: false
  };
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
