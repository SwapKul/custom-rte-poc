/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  headerState: {
    title: "Home",
  },
  status: "idle",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setTitle: (state, { payload }) => {
      state.headerState.title = payload;
    },
  },
});

export const { setTitle } = layoutSlice.actions;

export const selectLayout = (state: RootState) => state.layout;

export default layoutSlice.reducer;
