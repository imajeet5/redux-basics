import axios from "axios";
import * as actions from "../actions/api";

const api = ({ dispatch }) => (next) => async (action) => {
  // we want to send any action type that pass through this middleware to the next middleware then reducer to handle
  // as this middleware is just for api call and then dispatch the action
  // if the action type is "apiCallBegan" then we will do the api call
  if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onSuccess, onError, onStart } = action.payload;

  if (action.payload.onStart) dispatch({ type: onStart });

  next(action);

  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });
    //General
    dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
  } catch (error) {
    // general error handler
    dispatch(actions.apiCallFailed(error.message));
    // for specific
    if (onError) dispatch({ type: onError, payload: error.message });
  }
};

export default api;
