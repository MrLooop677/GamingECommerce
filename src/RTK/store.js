import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import contactSlice from "./contactSlice";
import postSlice from "./postSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: { productSlice, authSlice, cartSlice, postSlice, contactSlice },
  devTools: true,
});
export default store;
