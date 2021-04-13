import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addFriend } from '../modules/FriendManager';
import { getAllUsers, existingUserCheck } from '../modules/UserManager'
import './FriendForm.css'

export const FriendForm = () => {
    
    const [friend, setFriend] = useState({});
    // const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(false);

    const history = useHistory();

    // useEffect(() => {
    //     getAllUsers()
    //     .then(user => {
    //         console.log(user)
    //         setUser(user)
    //         setIsLoading(false);
    //     })
    // }, [])

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
        const saveInputValue = document.querySelector("#name").value
        getAllUsers()
        .then(users => {
            const userObj = users.find(user => {
                if (user.name === saveInputValue) {
                    return userObj
                } else {
                    
                    window.alert("Please select an existing user")
                   //store input field in state, then set state to empty string, possibly.
                }
            })
            console.log(userObj);
            //we need the id off of the user object. 
            const newFriendObj = userObj.id
            console.log(newFriendObj)
            //create new friendship object with appropriate properties
            const newFriendship = {
                userId: userObj.id,
                currentUserId:  parseInt(sessionStorage.getItem("nutshell_user"))
                
            }
            //set the values equal to the currentUserId and the userId 
            //save new friendship to the friends list
            // if (userObj === undefined){
            //     window.alert("Please select an existing user")
            // } else {
            addFriend(newFriendship)
            .then(() => history.push('/friends'))
            
        })
    }
        

        //add fetch call to query user database
        // addFriend(friend)
        //     .then(() => history.push('/friends'))
    

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