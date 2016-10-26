import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './store/store';

import { allTodos } from './reducers/selector';
import { requestTodos, receiveTodos } from './actions/todo_actions';
import Root from './components/root';


let store = configureStore();
window.store = store;
window.requestTodos = requestTodos;
window.allTodos = allTodos;

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, rootEl);
});
