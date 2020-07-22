import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// internally this function will call two function, create action with the same name specified and create reducers
const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    // actions => action handlers
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolve = true;
    },
    bugRemoved: (bugs, action) => {
      bugs.filter((bug) => bug.id !== action.payload.id);
    },
  },
});

console.log(slice);

// Action creators
export const bugAdded = createAction("bugAdded");

export const bugRemoved = createAction("bugRemoved");

export const bugResolved = createAction("bugResolved");

//Reducers

let lastId = 0;

// createReducer uses Immerjs under the hood, which has a produce function to update the state
// produce(initialState, draftState => draftState.newProperty = 1)

//key: values
//action: functions
// like a mapping between an event and an event handler
export default createReducer([], {
  [bugAdded.type]: (bugs, action) => {
    bugs.push({
      id: ++lastId,
      description: action.payload.description,
      resolve: false,
    });
  },
  [bugResolved.type]: (bugs, action) => {
    const index = bugs.findIndex((bug) => bug.id === action.payload.id);
    bugs[index].resolve = true;
  },
  [bugRemoved.type]: (bugs, action) => {
    bugs.filter((bug) => bug.id !== action.payload.id);
  },
});
