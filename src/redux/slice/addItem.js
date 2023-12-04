import { createSlice } from "@reduxjs/toolkit";

const addItemSlice = createSlice({
  name: "item",
  initialState: { list: [] },
  reducers: {
    addItem(state, action) {
      state.list.push(action.payload);
    },
    removeItem(state, action) {
      state.list = state.list.filter((item) => item?.id !== action.payload?.id);
    },
    updateStatus(state, action) {
      state.list = state.list.map((item) =>
        item.id === action.payload.id
          ? { ...item, isDone: true }
          : item
      );
    },
  },
});

const { actions, reducer } = addItemSlice;

export const { addItem, removeItem, updateStatus } = actions;

export default reducer;
