
import React, { useContext, } from 'react'
import { UserContext } from '../contexts/UserContext'

function Comp2() {
    const { user } = useContext(UserContext)
    if (!user) return <div> please login</div>
    return <div> welcome :{user.username}</div>
}

export default Comp2
