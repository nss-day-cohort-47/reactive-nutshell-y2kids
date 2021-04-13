import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addFriend } from '../modules/FriendManager';
import { getAllUsers } from '../modules/UserManager'
import './FriendForm.css'

export const FriendForm = () => {
    
    const [friend, setFriend] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        const newFriend = { ...friend }
        let selectedVal = event.target.value
        if(event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        newFriend[event.target.id] = selectedVal
        setFriend(newFriend)
    }

    const handleClickSaveFriend = (event) => {
        event.preventDefault()

        //add fetch call to query user database
        
        addFriend(friend)
            .then(() => history.push('/friends'))
    }

    return (
        <form className="friendForm">
            <h2 className="friendForm__title">New Friend</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Friend name: </label>
                    <input type="text" id='name' onChange={handleControlledInputChange} required autoFocus className="form-contorl" placeholder="Friend name"
                    value={friend.name} />

                </div>
            </fieldset>
            {/* <fieldset>
                <div>
                    <label>
                        <input />
                    </label>
                </div>
            </fieldset> */}
            <button type="button" className="btn btn-primary" onClick={handleClickSaveFriend}>Save Friend</button>
        </form>
    )
}