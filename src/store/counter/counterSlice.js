import { createSlice } from '@reduxjs/toolkit'  
//슬라이스 - 툴킷 세팅을 쉽게 해주는 방법  리듀서와 액션크리에이터를 합쳐서 세팅 해놓은것 

const initialState = {
    value: 0
}
const counterSlice  = createSlice({
  name: 'counter',
  initialState,
  reducers: {
        increment : (state,action) => {
            state.value += action.payload;
        },
        decrement : (state,action) => {
            state.value -= action.payload;
        },
    },

})


export const { increment , decrement } = counterSlice.actions  

export default counterSlice.reducer