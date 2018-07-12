import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteTodo } from '../actions/todoActions';

class TodoList extends Component {

  constructor (props) {
    super(props);

    this.deleteTodo.bind(this);
  }

  deleteTodo (index) {
    this.props.deleteTodo(index);
  }

  render () {
    const todos = this.props.todos;

    return (
      <div>
        <ul>
          {
            todos.map((todo, index) => {
              return (
                <li key={index}>
                  {todo.title}
                  &nbsp;
                  <button onClick={ () => this.deleteTodo(index) }>Delete</button>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todoReducer.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteTodo: index => dispatch(deleteTodo(index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);
