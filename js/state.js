export const state = {
      tasks: [],
        currentFilter: 'all'
        };

        export function setTasks(newTasks) {
          state.tasks = newTasks;
          }

          export function setFilter(filter) {
            state.currentFilter = filter;
            }

