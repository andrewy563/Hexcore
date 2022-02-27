import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "damage",
  initialState: { magicalDamage: 0, physicalDamage: 0 },
  reducers: {
    setMagicalDamage: (state, action) => {
      state.magicalDamage = action.payload;
    },
    setPhysicalDamage: (state, action) => {
      state.physicalDamage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMagicalDamage, setPhysicalDamage } = counterSlice.actions;

export default counterSlice.reducer;
