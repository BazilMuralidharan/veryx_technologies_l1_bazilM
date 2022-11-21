import { configureStore } from "@reduxjs/toolkit";
import GlobalState from "./GlobalState";

const Store = configureStore({
  reducer: {
    metaData: GlobalState
  },
  devTools: true
});

export default Store;
