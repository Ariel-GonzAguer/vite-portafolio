import { createSlice } from "@reduxjs/toolkit";

const designSlice = createSlice({
  name: "design",
  initialState: {
    design: "dark", // Asegúrate de tener un estado inicial
  },
  reducers: {
    chooseDesignStyle: (state, action) => {
      state.design = action.payload;
    },
  },
});

export const { chooseDesignStyle } = designSlice.actions;
export default designSlice.reducer;
