//Author: Bryson Goins. The purpose of this module is simply to put the MsgList component in a containing div.
// Originally the structure of my components was different, and this file was needed, but now it is a little redundant.

import React from 'react'
import { MsgList } from './MsgList'
import './PMs.css'

export const MsgBox = () => {
    return (
        <div className="PMcontainer">
            <MsgList />
        </div>
    )
}