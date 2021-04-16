import React from 'react'
import './PMs.css'

export const SentMsgCard = ({message}) => {
    return (
        <div className="sentMsg">
            <h4>
                <span className="nameOfSender">{message.user?.name}: </span>
                {`${message.message}`}
            </h4>
        </div>
    )
}