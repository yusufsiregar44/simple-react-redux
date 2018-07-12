import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions/todoActions';

class CreateTodoForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todo: {
        title: ''
      }
    };

    this.inputChange = this.inputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  inputChange (event) {
    const title = event.target.value;
    this.setState({
      todo: { title }
    });
  }

  addTodo (event) {
    event.preventDefault();
    this.props.addTodo(this.state.todo);

    // Clear the state
    this.setState({
      todo: { title: '' }
    });
  }

  render () {
    return (
      <div className="form">
        <form method="post" onSubmit={ this.addTodo }>
          <input type="text" placeholder="Add your Todo..."
                 autoComplete="off" onChange={ this.inputChange }
                 value={ this.state.todo.title }
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(CreateTodoForm);
