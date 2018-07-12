import React, { Component } from 'react';
import CreateTodoForm from './CreateTodoForm';
import TodoList from './TodoList';

class Home extends Component {
  render () {
    return (
      <div>
        <div className="header">
          <h1>Todo App</h1>
          <p>The boring Todo app</p>
        </div>
        <CreateTodoForm />
        <TodoList />
      </div>
    );
  }
}

export default Home;
