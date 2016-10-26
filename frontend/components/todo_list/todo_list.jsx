import React from 'react';
import { requestTodos } from '../../actions/todo_actions';

class TodoList extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    console.log('component mounted');
    requestTodos(this.props);
  }

  render() {
    return(
      <div>
        <h1>Todos</h1>
        <ul>
          { this.props.map( (todo, index) => (
            <li key={index}>{todo.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}
