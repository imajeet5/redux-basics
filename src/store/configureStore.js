import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer";
import logger from "./middleware/logger";
import func from "./middleware/func";

export default function () {
  return configureStore({
    reducer: appReducer,
    middleware: [logger("console"), func],
  });
}
