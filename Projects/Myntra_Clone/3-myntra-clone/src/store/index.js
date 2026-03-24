import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Default_Items } from "../../data/items";
const itemsSlice = createSlice({
  name: "items",
  initialState: Default_Items,
  reducers: {
    addInitialItems: (store, action) => {
      return store;
    },
  },
});
const myntraStore = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export const itemsActions = itemsSlice.actions;
export default myntraStore;
