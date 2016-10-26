import React from 'react';
import { requestTodos } from '../../actions/todo_actions';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, createTodo, updateTodo } = this.props;
    
    return(
      <div>
        <h1>Todos</h1>
        <ul>
          {
            todos.map( (todo) => (
              <TodoListItem
                key = {todo.id}
                todo = {todo} />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default TodoList;
