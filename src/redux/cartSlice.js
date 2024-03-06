import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const slice = createSlice({
    name:"cartSlice",
    initialState : {
        value: []
    },
    reducers :{
        AddToCard:(state,action)=>{
            let data = action.payload
             data.quantity = 1
           let isAlready = state.value.filter((item)=>item.id === data.id)
           if(isAlready.length){
            toast.success("this product is already added in cart")
           }else{
            state.value = [...state.value,data]
            toast.success("add product to cart successfully")
           }
          
        },
        DeleteItemToCart : (state,action)=>{
            let id = action.payload
            state.value = state.value.filter((item)=>item.id !== id)
        },

        updateQuantity : (state,action)=>{
          let {type,id} = action.payload
          if(type==="increment"){
            let index = state.value.findIndex((item)=>item.id===id)
             state.value[index].quantity++;
          }

          if(type==="decrement"){
            let index = state.value.findIndex((item)=>item.id===id)
            let data = state.value[index]
            if(data.quantity>1){
                data.quantity--;
            }
          }
        }
    }
})

export const {AddToCard,DeleteItemToCart,updateQuantity} = slice.actions
export default slice.reducer