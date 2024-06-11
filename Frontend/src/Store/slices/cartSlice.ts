// src/redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductItem } from "../../types";


interface CartState {
  items: ProductItem[];
}

const initialState: CartState = {
  items: [],
};
// const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
