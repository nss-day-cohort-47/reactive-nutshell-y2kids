import React from 'react'

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