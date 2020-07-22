import toDoReducer from "./todo";
import bugReducer from "./bugs";

function appReducer(state = {}, action) {
  return {
    todoApp: toDoReducer(state.todoApp, action),
    bugApp: bugReducer(state.bugApp, action),
  };
}

export default appReducer;
