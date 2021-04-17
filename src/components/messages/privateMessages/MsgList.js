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
            const sentByCurrent = allPMs.filter(message => message.userId === parseInt(currentUserId))
            const sentByOthers = allPMs.filter(message => message.userId !== parseInt(currentUserId))

            const newCurrent = sentByCurrent.map(message => { 
                message.sentBySelf = true
                return message
            })
            const newOthers = sentByOthers.map(message => {
                message.sentBySelf = false
                return message
            })

            const allMessages = newCurrent.concat(newOthers)
            return allMessages
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

