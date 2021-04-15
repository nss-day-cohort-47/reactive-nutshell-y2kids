//author: B.J. Golden
//purpose: this form allows the logged in user to edit their messages. 
//currently showing on the messages page underneath the message input box. need to possible route issue.

import React, { useState, useEffect } from "react"
import "./Message.css"
import { updateMessage, getMessageById } from "../modules/MessageManager";
import { useParams, useHistory} from "react-router-dom";

export const MessageEditForm = () => {
    const [message, setMessage] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const {messageId} = useParams();
    const history = useHistory();

    const handleFieldChange = evt => {
        const stateToChange = { ...message };
        stateToChange[evt.target.id] = evt.target.value;
        setMessage(stateToChange);
      };

    //   const handleControlledInputChange = (event) => {
	// 	const newMessage = { ...message }
	// 	let selectedVal = event.target.value
	// 	if (event.target.id.includes("Id")) {
	// 		selectedVal = parseInt(selectedVal)
	// 	}
	// 	newMessage[event.target.id] = selectedVal
	// 	setMessage(newMessage)
	// }

    const updateExistingMessage = (evt) => {
        evt.preventDefault()
        setIsLoading(true);
    
        
        const editedMessage = {
          id: message.userId,
          name: message.name,
          breed: message.breed,

        };
    
      updateMessage(editedMessage)
        .then(() => history.push("/messages")
        )
      }

      useEffect(() => {
        getMessageById(messageId)
          .then(message => {
            setMessage(message);
            setIsLoading(false);
          });
      }, []);
    
      return (
        <>
          <form className="messageForm">
            <fieldset>
              <div className="form-group">
                  <label htmlFor="message">Message: </label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="edit__message"
                  value={message.message}
                />
              </div>
              <div className="alignRight">
                <button
                  type="button" disabled={isLoading}
                  onClick={updateExistingMessage}
                  className="btn btn-primary"
                > Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );
}