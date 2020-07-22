import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();

store.dispatch(bugAdded("Bug 123"));

store.dispatch(bugAdded("Bug 456"));

store.dispatch(bugResolved(2));

console.log(store.getState());

store.dispatch(bugRemoved(1));

console.log(store.getState());
