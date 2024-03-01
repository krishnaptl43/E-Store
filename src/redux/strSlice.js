import { createSlice } from "@reduxjs/toolkit"

const slice = createSlice({
    name:"strSlice",
    initialState :{
        value:"my name is anthony gonzalvis",
    },
    reducers :{
        AddData : (state,action)=>{
          state.value = action.payload
        },
    }
})
 
export const {AddData} = slice.actions;
export default slice.reducer;