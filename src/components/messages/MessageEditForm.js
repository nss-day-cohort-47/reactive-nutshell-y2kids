//author: B.J. Golden
//purpose: this form allows the logged in user to edit their messages. 


import React, { useState, useEffect } from "react"
import "./Message.css"
import { updateMessage, getMessageById, getAllMessages } from "../modules/MessageManager";
import { useParams, useHistory} from "react-router-dom";

export const MessageEditForm = () => {
    const [message, setMessage] = useState({})
    const [messages, setMessages] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    const {messageId} = useParams();
    const history = useHistory();

    const getMessages = () => {
        return getAllMessages()
        .then(messagesFromAPI => {
            setMessages(messagesFromAPI)
        });
    };

    const handleFieldChange = evt => {
        const stateToChange = { ...message };
        stateToChange[evt.target.id] = evt.target.value;
        setMessage(stateToChange);
      };


    const updateExistingMessage = (evt) => {
        evt.preventDefault()
        setIsLoading(true);
    
        
        const editedMessage = {
            userId: message.userId,
            date: message.date,
            message: message.message,
            id: messageId
        };
    
      updateMessage(editedMessage)
      .then(() => getMessages())
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
        <h2 className="editMessage">Edit Message: </h2>
          <form className="messageForm">
            <fieldset>
              <div className="form-group">
                  <label htmlFor="message"></label>
                <input
                  type="text"
                  required
                  className="form-control"
                  onChange={handleFieldChange}
                  id="message"
                  value={message.message}
                />
              </div>
              <div className="alignRight">
                <button 
                  type="button" disabled={isLoading}
                  onClick={updateExistingMessage}
                  className="editMessageSubmit"
                > Submit</button>
              </div>
            </fieldset>
          </form>
        </>
      );
}