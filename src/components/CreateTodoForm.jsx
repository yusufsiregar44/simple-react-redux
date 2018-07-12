import React, { Component } from 'react';

class CreateTodoForm extends Component {
  render () {
    return (
      <div className="form">
        <form method="post">
          <input type="text" placeholder="Add your Todo..." autoComplete="off" />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default CreateTodoForm;
