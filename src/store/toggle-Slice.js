import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleBtn",
  initialState: {
    isToggle: false,
  },
  reducers: {
    toggle(state) {
     console.log(state.isToggle)
      state.isToggle = !state.isToggle;
    },
  },
});

export const toggleActions = toggleSlice.actions;

export default toggleSlice;
