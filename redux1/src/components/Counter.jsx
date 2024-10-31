import React from 'react'
import { fun1, fun2 } from '../features/counter/counterSlice'
import { useDispatch, useSelector } from 'react-redux'


function Counter() {
    const count = useSelector(state => state.counterReducer.value)
    console.log(count)
    const dispatch = useDispatch()

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => dispatch(fun1())}> add</button>
            <button onClick={() => dispatch(fun2())}> rem</button>

        </div>
    )
}

export default Counter
