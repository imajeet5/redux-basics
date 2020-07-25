import { combineReducers } from "redux";

import toDoReducer from "./todo";
import bugReducer from "./bugs";
import projectReducer from "./projects";
import usersReducer from "./users";

export default combineReducers({
  bugs: bugReducer,
  projects: projectReducer,
  todo: toDoReducer,
  users: usersReducer,
});
