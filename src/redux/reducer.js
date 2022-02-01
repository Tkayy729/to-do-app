import * as types from "./actionTypes";

const initialState = {
  todos: [
    {
      id: 1,
      task: "Wake Up",
      complete: false,
    },
  ],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.COMPLETE_TODO:
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, completed: !action.payload.completed}
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    default:
      return state;
  }
};

export default todosReducer;
