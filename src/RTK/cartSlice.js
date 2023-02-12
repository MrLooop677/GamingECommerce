import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "product",
  initialState: { cart: [] },
  reducers: {
    addToCart(state, action) {
      const findItem = state.cart.find(
        (product) => product.id == action.payload.id
      );
      if (findItem) {
        findItem.qty += 1;
      } else {
        const cloneProduct = { ...action.payload, qty: 1 };
        state.cart.push(cloneProduct);
      }
    },
    deteteItem(state, action) {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
    },
    clearItemes(state) {
      state.cart = [];
    },
  },
});
export const { addToCart, deteteItem, clearItemes } = cartSlice.actions;
export default cartSlice.reducer;
