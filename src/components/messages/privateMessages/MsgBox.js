import React, {useState} from 'react'
import { MsgList } from './MsgList'
import { MsgInput } from './MsgInput'

export const MsgBox = () => {
    return (
        <div className="PMcontainer">
            <MsgList />
            <MsgInput />
        </div>
    )
}