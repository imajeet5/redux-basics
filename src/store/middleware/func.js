// We don't need to create this middleware from scratch, this is already build for us
// from Redux Thunk
// Redux tool kit automatically brings redux thunk for us

const func = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === "function") {
    action(dispatch, getState);
  } else {
    next(action);
  }
};

export default func;
