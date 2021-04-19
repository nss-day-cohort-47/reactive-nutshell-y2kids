//Author: Bryson Goins. The purpose of this module is to render the input fields for private messages. It also
// handles changes or clicks on those inputs.

import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../../modules/UserManager'
import { addPM } from '../../modules/PrivateMessageManager'
import './PMs.css'


export const MsgInput = ({ renderList }) => {
    const [users, setUsers] = useState([])
    const [messageObj, setMessageObj] = useState({
        userId: 0,
        receiverId: 0,
        message: ""
    })

    const currentUserId = sessionStorage.getItem("nutshell_user")

    const getUsers = () => {
        getAllUsers().then(allUsers => {
            setUsers(allUsers)
        })
    }

    const handleReceiverChange = (event) => {
        const newMessageObj = { ...messageObj }
        let receiverId = parseInt(event.target.value)
        const userId = parseInt(sessionStorage.getItem("nutshell_user"))
        newMessageObj.receiverId = receiverId
        newMessageObj.userId = userId
        setMessageObj(newMessageObj)
    }

    const handleMessageChange = (event) => {
        const newMessageObj = { ...messageObj }
        const message = event.target.value;

        newMessageObj.message = message
        setMessageObj(newMessageObj)
    }

    const handleClickSend = (event) => {
        event.preventDefault()

        if (messageObj.userId === 0 || messageObj.receiverId === 0) {
            alert("Please choose a user to send a message to.")
        } else {
            let datedMessage = { ...messageObj }
            datedMessage.timestamp = Date.now()

            addPM(datedMessage).then(() => {
                renderList()
            }).then(() => {
                const resetMsg = {...messageObj}
                resetMsg.message = ""
                setMessageObj(resetMsg)
            })
        }
    }



    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="inputContainer">
            <textarea id="PMinputField" value={messageObj.message} name="PMinputField" rows="5" cols="50" placeholder="Type Your Message" onChange={handleMessageChange} />
            <select name="userDropdown" id="userDropdown" onChange={handleReceiverChange} >
                <option value="0" selected disabled >Select a User</option>
                {users.map(user => {
                    if (user.id !== parseInt(currentUserId)) {
                        return <option key={user.id} value={user.id}>{user.name}</option>
                    }
                })}
            </select>
            <button id="sendButton" onClick={handleClickSend} >Send</button>
        </div>
    )
}