import React, { useState, useEffect } from 'react'
import { getAllPMs } from '../../modules/PrivateMessageManager'
import { SentMsgCard } from './SentMsgCard'
import { ReceivedMsgCard } from './ReceivedMsgCard'

export const MsgList = () => {
    const [messages, setMessages] = useState([])
    const currentUserId = sessionStorage.getItem("nutshell_user");

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
    }
    
    useEffect(() => {
        getPMs()
    },[])
    
    if (messages.length > 0) {
        return (
            <div className="messagesContainer">
                {messages.map(message => {
                    if (message.sentBySelf) {
                        return <SentMsgCard key={message.id} message={message} />
                    } else if (message.receiverId === currentUserId) { //LOOK AT THIS LINE WHEN YOU GET BACK
                        return <ReceivedMsgCard key={message.id} message={message} />
                    }
                })}
            </div>
        )
    } else {
        return (
            <div className="messagesContainer">

            </div>
        )
    }
}

