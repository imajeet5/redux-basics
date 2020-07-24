import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import appReducer from "./reducer";
import logger from "./middleware/logger";
import toast from "./middleware/toast";

export default function () {
  return configureStore({
    reducer: appReducer,
    middleware: [...getDefaultMiddleware(), logger("console"), toast],
  });
}
