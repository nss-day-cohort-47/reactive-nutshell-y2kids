import React, { useState, useEffect } from 'react'
import { getAllUsers } from '../../modules/UserManager'
import { addPM, getAllPMs } from '../../modules/PrivateMessageManager'
import { useHistory } from 'react-router-dom'


export const MsgInput = () => {
    const [users, setUsers] = useState([])
    const [messages, setMessages] = useState([])
    const [messageObj, setMessageObj] = useState({
        userId: 0,
        receiverId: 0,
        message: ""
    })
    const history = useHistory()

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

    const getPMs = () => {
        return getAllPMs()
        .then(allPMs => {
            setMessages(allPMs)
        })
    }

    const handleClickSend = (event) => {
        event.preventDefault()

        if (messageObj.userId === 0 || messageObj.receiverId === 0) {
            alert("Please choose a user to send a message to.")
        } else {
            addPM(messageObj).then(() => {
                document.location.reload()
            })
        }
    }



    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className="inputContainer">
            <select name="userDropdown" id="userDropdown" onChange={handleReceiverChange} >
                <option value="default" selected disabled >Select a User</option>
                {users.map(user => {
                    if (user.id !== parseInt(currentUserId)) {
                        return <option key={user.id} value={user.id}>{user.name}</option>
                    }
                })}
            </select>
            <textarea id="PMinputField" name="PMinputField" rows="5" cols="50" onChange={handleMessageChange} />
            <button onClick={handleClickSend} >Send</button>
        </div>
    )
}