import { createSlice } from "@reduxjs/toolkit";
const privacyToggleSlice = createSlice({
  name: "privacyToggleSlice",
  initialState: false,
  reducers: {
    toggleVal: (state, action) => {
      return !state;
    },
  },
});

export const privacyToggleActions = privacyToggleSlice.actions;
export default privacyToggleSlice;
