//Author: Bryson Goins. The purpose of this module is to display a 'card' for each task in the API.
// Also, you can initiate an Edit or Delete for that task from here.

import React from 'react'
import { useHistory } from 'react-router-dom'
import './TaskList.css'

export const TaskCard = ({ task, handleDeleteTask, handleCheckboxClick }) => {
    const history = useHistory()

    return (
        <div className="taskCard">
            <input type="checkbox" id={`taskCheck--${task.id}`} onChange={handleCheckboxClick} />
            <h4>{task.name}</h4>
            <h5>Estimated Completion Date:<br />{task.estCompletionDate}</h5>
            <div className="btnBox">
                <button className="taskEdit-bttn" type="button" onClick={() => history.push(`/tasks/${task.id}/edit`)}>Edit</button>
                <button className="taskDelete-bttn" type="button" onClick={() => handleDeleteTask(task.id)}>Delete</button>
            </div>
        </div>
    )
}