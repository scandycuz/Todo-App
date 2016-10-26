import { REQUEST_TODOS,
         RECEIVE_TODOS,
         receiveTodos,
         requestTodos } from '../actions/todo_actions';
import { fetchTodos } from '../util/todo_api_utils';


// const TodoMiddleware = store => next => action => {
//   // debugger
//   switch(action.type) {
//     case REQUEST_TODOS:
//       console.log("here is where todos would be fetched");
//       break;
//     default:
//       next(action);
//   }
// };

const TodoMiddleware = ({ getState, dispatch }) => next => action => {
  console.log("Middleware activated, action type:");
  console.log(action.type);
  switch(action.type) {
    case REQUEST_TODOS:
      console.log("Request Todos action fired");
      const success = data => dispatch(receiveTodos(data));
      const error = e => console.log(e);
      fetchTodos(success, error);
      break;
    default:
      next(action);
  }
};

export default TodoMiddleware;
