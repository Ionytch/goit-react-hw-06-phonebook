import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState="";

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilter(state, action) {
      return state=action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;