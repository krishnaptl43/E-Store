import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"cartSlice",
    initialState : {
        value: []
    },
    reducers :{
        AddToCard:(state,action)=>{
            let data = action.payload
            
           state.value = [...state.value,data]
        }
    }
})

export const {AddToCard} = slice.actions
export default slice.reducer