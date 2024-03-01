import { configureStore } from "@reduxjs/toolkit";
import strSlice from "./strSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer:{
        strData :strSlice,
        cartData: cartSlice
    }
})

export default store;