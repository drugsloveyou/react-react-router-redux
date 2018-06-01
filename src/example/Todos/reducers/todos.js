const { assign } = Object;
import undoable from 'redux-undo'
const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case "TOGGLE_TODO":
      return state.map(
        todo =>
          todo.id === action.id
            ? assign(todo, { completed: !todo.completed })
            : todo
      );
    default:
      return state;
  }
};
const undoableTodos = undoable(todos);
export default undoableTodos;
