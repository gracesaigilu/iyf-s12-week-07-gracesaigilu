import { addTask, toggleTask, deleteTask } from '../js/todo-logic.js';

describe('To-Do Logic Pure Functions', () => {
  test('addTask should add a new task to the array', () => {
    const initialTasks = [];
    const updatedTasks = addTask(initialTasks, 'Learn Jest');
    expect(updatedTasks.length).toBe(1);
    expect(updatedTasks[0].text).toBe('Learn Jest');
    expect(updatedTasks[0].completed).toBe(false);
  });

  test('toggleTask should flip the completed status of a task', () => {
    const initialTasks = [{ id: '1', text: 'Test', completed: false }];
    const updatedTasks = toggleTask(initialTasks, '1');
    expect(updatedTasks[0].completed).toBe(true);
  });

  test('deleteTask should remove a task by its id', () => {
    const initialTasks = [{ id: '1', text: 'Test', completed: false }];
    const updatedTasks = deleteTask(initialTasks, '1');
    expect(updatedTasks.length).toBe(0);
  });
});
