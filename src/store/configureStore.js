import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducer";

export default function () {
  return configureStore({ reducer: appReducer });
}
