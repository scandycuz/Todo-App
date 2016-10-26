import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

const App = ({store}) => (
  <TodoListContainer store={store} />
);

export default App;
