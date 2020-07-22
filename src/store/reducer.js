import toDoReducer from "./todo";
import bugReducer from "./bugs";
import projectReducer from "./projects";

function appReducer(state = {}, action) {
  return {
    todoApp: toDoReducer(state.todoApp, action),
    bugApp: bugReducer(state.bugApp, action),
    projectApp: projectReducer(state.projectApp, action),
  };
}

export default appReducer;
