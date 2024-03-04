import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"cartSlice",
    initialState : {
        value: []
    },
    reducers :{
        AddToCard:(state,action)=>{
            let data = action.payload
           let isAlready = state.value.filter((item)=>item.id === data.id)
           if(isAlready.length){
            alert("this product is already added in cart")
           }else{
            state.value = [...state.value,data]
           }
          
        },
        DeleteItemToCart : (state,action)=>{
            let id = action.payload
            state.value = state.value.filter((item)=>item.id !== id)
        }
    }
})

export const {AddToCard,DeleteItemToCart} = slice.actions
export default slice.reducer