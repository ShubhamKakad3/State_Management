import { configureStore } from '@reduxjs/toolkit'
import counterSlice from '../features/counter/counterSlice'
import todoSlice from "../features/todo/todoSlice"

export const store = configureStore({
    reducer: {
        // each ruducer here is a context of different fields 
        counterReducer: counterSlice,
        todoReducer: todoSlice
    },
    // middleware: () => { }
}) 