import axios from "axios";
import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk(
    "GET_PRODUCT",
    async (keyword) => {
        try{
            const res =await axios.get('https://my-json-server.typicode.com/JY-02/shopping/');
            return res.data;
        }catch(err){
            console.log(err)
        }
    }
)
const productSlice = createSlice({
    name: 'product',
    initialState:{
        value:[]
    },
    reducers:{
    },
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled,(state,action)=>{
            console.log('페이로드 값은',action.payload)
            state.value=action.payload;
        })
    }

})
export default productSlice.reducer