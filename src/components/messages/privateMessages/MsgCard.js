//Author: Bryson Goins. The purpose of this module is to render a card for every message sent by or received
// by the current user.

import React, { useState, useEffect } from 'react'
import './PMs.css'
import { getAllUsers } from '../../modules/UserManager'

export const MsgCard = ({message}) => {
    const currentUserId = sessionStorage.getItem("nutshell_user");
    const [receiver, setReceiver] = useState({name: ""})

    const getReceiverName = () => {
        getAllUsers().then(allUsers => {
            const receiver = allUsers.find(user => user.id === message.receiverId)
            setReceiver(receiver)
        })
    }

    useEffect(() => {
        getReceiverName()
    },[])

    if (message.sentBySelf) {
        return (
            <div className="sentMsg">
                <h4>
                    <span className="nameOfSender">{message.user?.name} {"->"} {receiver.name}: </span>
                    {`${message.message}`}
                </h4>
            </div>
        )
    } else if (message.receiverId === parseInt(currentUserId)) {
        return (
            <div className="receivedMsg">
                <h4>
                    <span className="nameOfSender">{message.user?.name}: </span>
                    {`${message.message}`}
                </h4>
            </div>
        )
    } else {
        return null
    }
}