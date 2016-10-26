import React from 'react';
import { requestTodos } from '../../actions/todo_actions';

class TodoListItem extends React.Component {

  render() {
    const { todo } = this.props;

    return(
      <li>{todo.title}</li>
    );
  }
}

export default TodoListItem;
