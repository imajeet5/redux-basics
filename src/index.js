import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from "./store/todo";
import configureStore from "./store/configureStore";

const store = configureStore();


console.log(store.getState());
store.dispatch(bugAdded({ description: "Bug 123" }));

store.dispatch(bugAdded({ description: "Bug 456" }));
console.log(store.getState());

store.dispatch(bugResolved({ id: 2 }));
console.log(store.getState());

store.dispatch(ADD_TODO({ text: "Go to swimming pool" }));

console.log(store.getState());
store.dispatch(TOGGLE_TODO({ index: 0 }));
store.dispatch(SET_VISIBILITY_FILTER({filter: 'SHOW_PENDING'}))


// store.dispatch(bugRemoved({ id: 1 }));

console.log(store.getState());
