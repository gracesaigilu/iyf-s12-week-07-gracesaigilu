export function createTask(text) {
      return {
          id: Date.now(),
              text: text,
                  completed: false
                    };
                    }

                    export function addTask(tasks, task) {
                      return [...tasks, task];
                      }

                      export function removeTask(tasks, taskId) {
                        return tasks.filter(task => task.id !== taskId);
                        }

                        export function toggleTask(tasks, taskId) {
                          return tasks.map(task => 
                              task.id === taskId ? { ...task, completed: !task.completed } : task
                                );
                                }

                                export function filterTasks(tasks, filter) {
                                  return tasks.filter(task => {
                                      if (filter === 'active') return !task.completed;
                                          if (filter === 'completed') return task.completed;
                                              return true;
                                                });
                                                }

