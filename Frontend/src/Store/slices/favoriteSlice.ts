// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../../types";

interface CartState {
  items: ProductItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<ProductItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addFavorites } = cartSlice.actions;
export default cartSlice.reducer;
