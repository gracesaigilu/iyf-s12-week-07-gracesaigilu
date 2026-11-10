// js/state.js

let todos = [];

function getTodos() {
  return todos;
  }

  function setTodos(newTodos) {
    todos = newTodos;
    }

    module.exports = {
      getTodos,
        setTodos
        };
        