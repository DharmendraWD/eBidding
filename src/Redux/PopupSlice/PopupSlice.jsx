// src/Redux/popup/popupSlice.js
import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: false,
  reducers: {
    togglePopup: (state) => !state,
  },
});

export const { togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
