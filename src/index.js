import {
  bugAdded,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  assignBugsToUser,
  getBugsByUser,
  loadBugs,
  addBug,
} from "./store/entities/bugs";
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "./store/entities/todo";
import { projectAdded } from "./store/entities/projects";
import configureStore from "./store/configureStore";
import { userAdded } from "./store/entities/users";

const store = configureStore();

// We sometime want to dispatch function
// store.dispatch((dispatchFunction, getState) => {
//   // Call an API
//   // When the promise is resolved => dispatch()
//   // If the promise is rejected =>  dispatch error
//   // We can give store the ability to dispatch functions by writing a middleware function;

//   setTimeout(() => {
//     console.log("%cThis is a yellow text", "color:yellow");
//     dispatchFunction(bugAdded({ description: "Bug from the api" }));
//     console.log(getState());
//   }, 1000);
// });



store.dispatch(loadBugs());
store.dispatch(addBug({ description: "bug from redux" }));

// store.dispatch({
//   type: "error",
//   payload: { message: "An error occurred" },
// });

// store.dispatch(userAdded({ name: "User 1" }));
// console.log(store.getState());
// store.dispatch(userAdded({ name: "User 2" }));
// store.dispatch(userAdded({ name: "User 3" }));

// store.dispatch(bugAdded({ description: "Bug 123" }));

// store.dispatch(bugAdded({ description: "Bug 456" }));
// console.log(store.getState());

// store.dispatch(assignBugsToUser({ bugId: 1, userId: 1 }));

// store.dispatch(bugResolved({ id: 2 }));
// console.log(store.getState());

// store.dispatch(ADD_TODO({ text: "Go to swimming pool" }));

// store.dispatch(projectAdded({ name: "My redux project1" }));
// console.log(store.getState());
// store.dispatch(projectAdded({ name: "My redux project2" }));
// console.log(store.getState());
// store.dispatch(projectAdded({ name: "My redux project3" }));
// console.log(store.getState());

// store.dispatch(TOGGLE_TODO({ index: 0 }));
// // store.dispatch(SET_VISIBILITY_FILTER({ filter: "SHOW_PENDING" }));

// // store.dispatch(bugRemoved({ id: 1 }));

// console.log(store.getState());

// const unresolvedBugs = getUnresolvedBugs(store.getState());

// const bugByUser = getBugsByUser(1)(store.getState());

// console.log(unresolvedBugs);

// console.log(bugByUser);
