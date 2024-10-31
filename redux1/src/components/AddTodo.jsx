
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


    return (
        <form onSubmit={handleSubmit} className='space-x-3 mt-12'>
            <input type="text"
                id=""
                placeholder='add todo'
                value={input}
                onChange={e => setInput(e.target.value)}
                className=''
            />


            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
