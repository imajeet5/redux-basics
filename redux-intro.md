## Redux Overview

In redux we store the application state inside a single javascript Object called store which is immutable.  
This Object is the single source of truth for our application state and is accessible by all part of the UI

```js
const store = {
  categories: [],
  product: [],
  cart: {},
  user: {},
};
```

We cannot directly modify or mutate the store, bcz redux is build on functional programming.

```js
store.user = { name: "Ajeet" }; // this is will not work
```

To update it, we should create a function that takes the store as an argument and return the updated store. This function is called reducer.  
So reducer is a function that take the current instance of the store and returns the updated store.

```javascript
function reducer(store) {
  // return updated store
  // in this function we should either use the spread operator, to create th copy of the store or
  // or use one of the immutability library like immer.js or immutable.js
}
```

### How does the reducer know that properties in the store it should update?

We need to pass another argument know as `action`. An **action** is just a plain javascript object that describes what just happens. Examples are the user logged in or logged out, added an item to the shopping cart and so on, the event that can happen to our application. Based on the type of action, the reducer will know what properties of the state to update. This doesn't mean all the updates are going to happen inside a single function or a single reducer. Each reducer will be responsible for updating a single slice of the store, like _categories_, _product_, _cart_ and _user_.  
Each reducer is responsible for updating it's own object in the store.

```javascript
function reducer(store, action) {
  // return updated store
}
```

---

### Component of Redux Application:-

- **Store** : This is a single Javascript object (immutable) that hold our application state.
- **Actions** : Plain javascript object that represent what _event_ just happened in our application.
- **Reducer** : We have one or more reducers, each responsible for updating a slice of the store. This reducers are pure function, so they don't touch global state, they don't mutate the argument and they don't have any side-effects.

### Working:-

1. When the user performs an action, we create an _action_ object and dispatch it. The Store object has an dispatch method, that takes an action and forward it to the reducer. We do not call the reducer directly, we just work with the store, the store is in charge of calling the reducer.
2. The reducer computes the new state and returns its to the store.
3. The store will then sets the new state internally and then notify the UI component about the update.
4. These UI component will pull out the updated data and refresh themselves.

### Steps to follow while building the Redux Application:-

1. **Design the store**: We need to define what we need to keep in the store
2. **Define the actions**: What are the action that user can perform in the application.
3. **Create reducers**: These will take an action and return updated state.
4. **Set up the store**: Finally, we need to setup the store based on our reducers
