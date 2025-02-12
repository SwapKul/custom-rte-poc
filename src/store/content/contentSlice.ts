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
    removeSelectContent: (state) => {
      state.selectedData = {};
    },
  },
});

export const { addContent, removeSelectContent } = contentSlice.actions;

export const selectContent = (state: RootState) => state.content.value;

export const selectedContent = (state: RootState) => state.content.selectedData;

export default contentSlice.reducer;
