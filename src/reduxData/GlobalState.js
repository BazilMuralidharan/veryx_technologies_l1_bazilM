import { createSlice } from "@reduxjs/toolkit";

const globalStateReducer = createSlice({
  name: "metaData",
  initialState: [],
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addUser } = globalStateReducer.actions;
export default globalStateReducer.reducer;
