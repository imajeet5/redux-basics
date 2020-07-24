const toast = (store) => (next) => (action) => {
  if (action.type === "error") {
    console.log("%cToastify: " + action.payload.message, "color:red");
  } else {
    next(action);
  }
};

export default toast;
