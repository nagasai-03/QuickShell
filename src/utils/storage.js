// src/utils/storage.js
export const saveViewState = (state) => {
    localStorage.setItem('kanban-view', JSON.stringify(state));
  };
  
  export const getViewState = () => {
    const state = localStorage.getItem('kanban-view');
    return state ? JSON.parse(state) : null;
  };  