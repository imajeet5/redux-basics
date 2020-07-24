## Design the store

```js
const store = [
  {
    id: 1,
    description: "",
    resolved: false,
  },
  {
    id: 2,
    description: "",
    resolved: false,
  },
];
```

## Define the action

- Action that user can perform:-

  - ##### Add a bug
  - ##### Mark bug as Resolved
  - ##### Delete a bug

  ```js
  {
    type: "ADD_BUG",
    description: "...",
  };
  ```

  Here we have an object with two properties, **type** is the only property that redux in our action object, if we don't have this property redux will throw error.  
   As redux is inspired from flux. In flux the structure for the action is, type and payload. Payload is an object that contain all the data about the action. We don't require to follow this structure in redux, but it preferred. The payload of the action should contain the minimum information we need to update our system.

  ```js
  {
      type: "bugAdded",
      payload: {
          description: "..."
      }
  }
  ```

  ## Define Reducer

  ```js
  function reducer(state = [], action) {
    if (action.type === "bugAdded") {
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolve: false,
        },
      ];
    } else if (action.type === "bugRemoved") {
      return state.filter((bug) => bug.id !== action.payload.id);
    }
    return state;
  }
  ```

  We also need to set the initial state, when we start our application the store is initially undefined redux is going to call our reducer instead of undefined we will return the initial state.

  In redux reducers have to be pure functions. State in redux is only set or updated by reducers

  ## Create Store

```javascript
import { createStore } from "redux";
import reducer from "./reducer";

const store = createStore(reducer);

export default store;
```

To set the store state we have to dispatch an action. That action will pass through the reducers and state will be updated by the reducers

### Redux Thunk

With the thunk middleware we can dispatch functions and this allows us to execute code that causes side-effect, like calling api. As we are not suppose to call api in reducers as reducer should be pure,they should get the current state and return the new state.
We need to put code with side effect like api call, dom manipulation in action creators. With the use of **THUNK** middleware we can also return a function from our middleware, and this function is where we encapsulate code with side-effects.

```js
const actionCreator = () => (dispatch) => {
  
};
```
