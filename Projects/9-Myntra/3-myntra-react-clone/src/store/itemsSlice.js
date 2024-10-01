import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../data/items";
const itemsSlice = createSlice({
  name: "items",
  initialState: DEFAULT_ITEMS,
  reducers: {
    addInitailItems: (store, action) => {
      return store;
    },
  },
});

export const itemsAction = itemsSlice.actions;

export default itemsSlice;


