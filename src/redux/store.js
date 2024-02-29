import { configureStore } from "@reduxjs/toolkit";
import strSlice from "./strSlice";

const store = configureStore({
    reducer:{
        strData :strSlice,
    }
})

export default store;