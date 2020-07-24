const logger = (param) => (store) => (next) => (action) => {
  console.log("Logging", param);
  // console.log("store: ", store);
  // console.log("next: ", next);
  // console.log("action: ", action);
  next(action);
};

export default logger;

// A middleware function is a curried version of a function with three parameters: store , next, action
