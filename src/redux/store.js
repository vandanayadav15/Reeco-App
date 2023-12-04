import { configureStore } from "@reduxjs/toolkit";

import addReducer from "./slice/addItem";
const rootReducer = {
  item: addReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
