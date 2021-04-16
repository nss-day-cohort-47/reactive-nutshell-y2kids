import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../../modules/UserManager'

export const MsgInput = () => {
    const [users, setUsers] = useState([])
    const currentUserId = sessionStorage.getItem("nutshell_user")

    const getUsers = () => {
        getAllUsers().then(allUsers => {
            setUsers(allUsers)
        })
    }

    useEffect(() => {
        getUsers()
    },[])

    return (
        <div className="inputContainer">
            <select name="userDropdown" id="userDropdown">
                <option value="default" disabled >Select a User</option>
                {users.map(user => {
                    if (user.id !== parseInt(currentUserId)) {
                        return <option key={user.id} value={user.name}>{user.name}</option>
                    }
                })}
            </select>
            <textarea id="PMinputField" name="PMinputField" rows="5" cols="50" />
            <button>Send</button>
        </div>
    )
}