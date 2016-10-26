import { combineReducers } from 'redux';
import TodosReducer from './todos_reducer.js';

const RootReducer = combineReducers({
  todos: TodosReducer
});

export default RootReducer;
