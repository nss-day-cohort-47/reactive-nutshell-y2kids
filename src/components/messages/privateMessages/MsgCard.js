import React from 'react'
import './PMs.css'

export const MsgCard = ({message}) => {
    const currentUserId = sessionStorage.getItem("nutshell_user");
    if (message.sentBySelf) {
        return (
            <div className="sentMsg">
                <h4>
                    <span className="nameOfSender">{message.user?.name}: </span>
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
    }
}