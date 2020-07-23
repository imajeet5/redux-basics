import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  assignBugsToUser,
  getBugsByUser,
} from "./store/bugs";
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "./store/todo";
import { projectAdded } from "./store/projects";
import configureStore from "./store/configureStore";
import { userAdded } from "./store/users";

const store = configureStore();

console.log(store.getState());

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(userAdded({ name: "User 3" }));

store.dispatch(bugAdded({ description: "Bug 123" }));

store.dispatch(bugAdded({ description: "Bug 456" }));
console.log(store.getState());

store.dispatch(assignBugsToUser({ bugId: 1, userId: 1 }));

store.dispatch(bugResolved({ id: 2 }));
console.log(store.getState());

store.dispatch(ADD_TODO({ text: "Go to swimming pool" }));

store.dispatch(projectAdded({ name: "My redux project1" }));
console.log(store.getState());
store.dispatch(projectAdded({ name: "My redux project2" }));
console.log(store.getState());
store.dispatch(projectAdded({ name: "My redux project3" }));
console.log(store.getState());

store.dispatch(TOGGLE_TODO({ index: 0 }));
// store.dispatch(SET_VISIBILITY_FILTER({ filter: "SHOW_PENDING" }));

// store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());

const unresolvedBugs = getUnresolvedBugs(store.getState());

const bugByUser = getBugsByUser(1)(store.getState());

console.log(unresolvedBugs);

console.log(bugByUser);
