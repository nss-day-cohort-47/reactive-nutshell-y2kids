//Author: Bryson Goins. The purpose of this module is to render a list of all private messages. It also
// uses some logic to only show the messages sent by or received by the current user.

import React, { useState, useEffect } from 'react'
import { getAllPMs } from '../../modules/PrivateMessageManager'
import { MsgCard } from './MsgCard'
import { MsgInput } from './MsgInput'
import './PMs.css'

export const MsgList = () => {
    const [messages, setMessages] = useState([])
    const currentUserId = sessionStorage.getItem("nutshell_user");
    
    const scrollToEnd = () => {
        const container = document.querySelector(".messagesContainer")
        container.scrollTop = container.scrollHeight
    }

    const getPMs = () => {
        
        getAllPMs().then(allPMs => {
            const senderMarked = allPMs.map(curr => ({...curr, sentBySelf: curr.userId === parseInt(currentUserId)}));
            return senderMarked
        })
        .then(allMsgsArray => {
            setMessages(allMsgsArray)
        })
        .then(() => {
            scrollToEnd()
        })
    }

    useEffect(() => {
        getPMs()
    },[])

    if (messages.length > 0) {
        return (
            <>
            <div className="messagesContainer">
                {messages.map(message => {
                    return <MsgCard key={message.id} message={message} />
                })}
            </div>
            <MsgInput renderList={getPMs} />
            </>
        )
    } else {
        return (
            <>
            <div className="messagesContainer">
            
            </div>
            <MsgInput renderList={getPMs} />
            </>
        )
    }
}

