import React from 'react'

export const ReceivedMsgCard = ({message}) => {
    return (
        <div className="receivedMsg">
            <h4>
                <span className="nameOfSender">{message.user?.name}: </span>
                {`${message.message}`}
            </h4>
        </div>
    )
}