import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "defense",
  initialState: { armor: 0, magicResistance: 0 },
  reducers: {
    setArmor: (state, action) => {
      state.armor = action.payload;
    },
    setMagicResistance: (state, action) => {
      state.magicResistance = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setArmor, setMagicResistance } = counterSlice.actions;

export default counterSlice.reducer;
