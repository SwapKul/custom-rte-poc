/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: any = {
  language: "",
  stack: "",
  framework: "",
  status: "idle",
  step: 1,
  totalSteps: 3,
};

export const rteSlice = createSlice({
  name: "rte",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setLanguage: (state, { payload }) => {
      state.language = payload;
    },
    setStack: (state, { payload }) => {
      state.stack = payload;
    },
    setFramework: (state, { payload }) => {
      state.framework = payload;
    },
    setNextStep: (state) => {
      if (state.step !== 3) {
        state.step = state.step + 1;
      }
    },
    setPrevStep: (state) => {
      if (state.step !== 1) {
        state.step = state.step - 1;
      }
    },
    setRteState: (state, { payload }) => {
      if (payload.language) {
        state.language = payload.language;
      }
      if (payload.stack) {
        state.stack = payload.stack;
      }
      if (payload.framework) {
        state.framework = payload.framework;
      }
    },
  },
});

export const {
  setLanguage,
  setStack,
  setFramework,
  setRteState,
  setNextStep,
  setPrevStep,
} = rteSlice.actions;

export const selectRte = (state: RootState) => state.rte;

export default rteSlice.reducer;
