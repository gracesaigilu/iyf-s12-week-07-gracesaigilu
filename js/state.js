// js/state.js - Manages the application state

import { loadTasks, saveTasks } from './storage.js';

let tasks = loadTasks();
let currentFilter = 'all';

export function getState() {
    return { tasks, currentFilter };
    }

    export function setTasks(newTasks) {
        tasks = newTasks;
            saveTasks(tasks);
            }

            export function setFilter(filter) {
                currentFilter = filter;
                }
                