import { createAction, createReducer } from "@reduxjs/toolkit";

// Action creators
export const ADD_TODO = createAction("ADD_TODO");

export const TOGGLE_TODO = createAction("TOGGLE_TODO");

export const SET_VISIBILITY_FILTER = createAction("SET_VISIBILITY_FILTER");

function visibilityFilter(state = "NOT_SET", action) {
  if (action.type === SET_VISIBILITY_FILTER.type) {
    return action.payload.filter;
  } else {
    return state;
  }
}

function todos(state = [], action) {  
  switch (action.type) {
    case ADD_TODO.type:
      return state.concat([{ text: action.payload.text, completed: false }]);
    case TOGGLE_TODO.type:        
      return state.map((todo, index) =>
        action.payload.index === index
          ? { text: todo.text, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
}

function todoApp(state = {}, action) {
    debugger;
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  };
}

export default todoApp;
