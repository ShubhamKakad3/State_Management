import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/UserContext'

function Comp1() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(UserContext)
    const HandleSubmte = (e) => {
        e.preventDefault()
        setUser({ username, password })
    }
    return (
        <div>
            <h2>Login</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => { setUsername(e.target.value) }}
                placeholder=' username ' />
            <input
                value={password}
                onChange={(e) => { setPassword(e.target.value) }}
                type="text"
                placeholder=' password ' />
            <button onClick={HandleSubmte}>Submit</button>
        </div>
    )
}


export default Comp1
