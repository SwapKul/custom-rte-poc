import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IStoreState } from "@interfaces/common";

const initialState: IStoreState = {
  value: [
    {
      type: "select",
      value: "",
    },
  ],
  selectedData: {},
  status: "idle",
};

export const contentSlice = createSlice({
  name: "content",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addContent: (state) => {
      state.value = [
        ...state.value,
        {
          type: "select",
          value: "",
        },
      ];
    },
    updateContent: (state, { payload: { index, value } }) => {
      state.value = state.value.map((content, i) =>
        i === index ? { ...content, value } : content
      );
    },
    updateContentType: (state, { payload: { index, type } }) => {
      state.value = state.value.map((content, i) =>
        i === index ? { ...content, type } : content
      );
    },
    removeSelectedContent: (state, { payload: { index } }) => {
      state.value = state.value.filter((_, ind) => ind !== index);
    },
    resetContent: (state) => {
      state.value = [
        {
          type: "select",
          value: "",
        },
      ];
    },
  },
});

export const {
  addContent,
  updateContent,
  updateContentType,
  removeSelectedContent,
  resetContent,
} = contentSlice.actions;

export const allContent = (state: RootState) => state.content.value;

export default contentSlice.reducer;
