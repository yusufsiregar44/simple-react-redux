const initialState = {
  todos: [],
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {...state, todos: state.todos.concat(action.payload.todo)}
    case 'DELETE_TODO':
      return {...state, todos: state.todos.filter((todo, index) => index !== action.payload.index)};
    default:
      return state;
  }
};

export default todoReducer;
