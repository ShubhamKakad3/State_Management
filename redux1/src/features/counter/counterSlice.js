import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    name: 'shubham'

}

// each slice is a context about, and only its reduces can mutate the state 
export const counterSlice = createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        fun1: (state, action) => { state.value += 1 },
        fun2: (state, action) => { state.value -= 1 },
        fun3: (state, action) => { state.value += action.payload }
    }
})

export const { fun1, fun2, fun3 } = counterSlice.actions
export default counterSlice.reducer


