import { createSlice } from "@reduxjs/toolkit";
const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
    },
    removeFromBag: (state, action) => {
      state.filter((state) => console.log(state));
    },
  },
});
export const bagSliceActions = bagSlice.actions;
export default bagSlice;
