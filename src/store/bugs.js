// Action Types
export const BUG_ADDED = "bugAdded";
export const BUG_REMOVED = "bugRemoved";
export const BUG_RESOLVED = "bugResolved";

// Action creators
export const bugAdded = (description) => ({
  type: BUG_ADDED,
  payload: { description },
});

export const bugRemoved = (id) => ({
  type: BUG_REMOVED,
  payload: { id },
});

export const bugResolved = (id) => ({
  type: BUG_RESOLVED,
  payload: { id },
});

//Reducers

let lastId = 0;

export default function reducer(state = [], action) {
  if (action.type === BUG_ADDED) {
    return [
      ...state,
      {
        id: ++lastId,
        description: action.payload.description,
        resolve: false,
      },
    ];
  } else if (action.type === BUG_REMOVED) {
    return state.filter((bug) => bug.id !== action.payload.id);
  } else if (action.type === BUG_RESOLVED) {
    return state.map((bug) => {
      if (bug.id !== action.payload.id) {
        return bug;
      }
      return { ...bug, resolve: true };
    });
  }
  return state;
}
