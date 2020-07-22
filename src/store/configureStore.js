import { configureStore } from "@reduxjs/toolkit";
import reducer from "./bugs";
import toDoReducer from "./todo";
import appReducer from "./reducer";

export default function () {
  return configureStore({ reducer: appReducer });
}
