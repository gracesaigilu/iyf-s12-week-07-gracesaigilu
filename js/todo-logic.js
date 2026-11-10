// js/todo-logic.js

function addTodo(todos, text) {
  if (!text || text.trim() === "") return todos;
    const newTodo = {
        id: Date.now(),
            text: text.trim(),
                completed: false
                  };
                    return [...todos, newTodo];
                    }

                    function deleteTodo(todos, id) {
                      return todos.filter(todo => todo.id !== id);
                      }

                      function toggleTodo(todos, id) {
                        return todos.map(todo => 
                            todo.id === id ? { ...todo, completed: !todo.completed } : todo
                              );
                              }

                              module.exports = {
                                addTodo,
                                  deleteTodo,
                                    toggleTodo
                                    };
                                    