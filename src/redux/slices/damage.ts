import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "damage",
  initialState: { magicDamage: 0, physicalDamage: 0 },
  reducers: {
    setMagicDamage: (state, action) => {
      state.magicDamage = action.payload;
    },
    setPhysicalDamage: (state, action) => {
      state.physicalDamage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMagicDamage, setPhysicalDamage } = counterSlice.actions;

export default counterSlice.reducer;
