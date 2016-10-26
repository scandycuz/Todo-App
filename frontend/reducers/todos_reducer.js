import { requestTodos,
         receiveTodos,
         RECEIVE_TODOS,
         REQUEST_TODOS} from '../actions/todo_actions';

// const defaultState = {
//   "1": {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   "2": {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   }
// };

const TodosReducer = (state = { }, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      Array.from(action.todos).forEach(todo => { newState[todo.id] = todo; });
      console.log('reducer called');
      console.log(newState);
      return newState;
    default:
      return state;
  }
};

export default TodosReducer;
