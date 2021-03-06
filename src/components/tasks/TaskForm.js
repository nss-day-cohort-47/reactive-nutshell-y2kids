//Author: Bryson Goins. The purpose of this module is to display the form for adding a new task to the API.

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addTask } from '../modules/TaskManager'

export const TaskForm = () => {
    const [task, setTask] = useState({name: "", estCompletionDate: ""});
    const history = useHistory();
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const handleInputChange = (event) => {
        const newTask = {...task}
        let value = event.target.value;

        newTask[event.target.id] = value;
        setTask(newTask)
    }

    const handleSaveTask = (event) => {
        event.preventDefault();
        
        let task2Add = {...task};
        task2Add.userId = currentUserId
        task2Add.isComplete = false;
        
        addTask(task2Add).then(() => history.push("/tasks"))
    }

    const handleCancelNew = (event) => {
        history.push("/tasks")
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label className="taskFormLabel" htmlFor="name">Task:</label>
                    <input type="text" id="name" onChange={handleInputChange} required autoFocus className="form-control" placeholder="Task" value={task.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label className="taskFormLabel" htmlFor="estCompletionDate">Estimated Completion Date:</label>
                    <input type="date" id="estCompletionDate" onChange={handleInputChange} required autoFocus className="form-control" value={task.estCompletionDate} />
                </div>
            </fieldset>
            <button className="cancel-bttn" onClick={handleCancelNew}>Cancel</button>
            <button className="saveTask-bttn" onClick={handleSaveTask}>Save Task</button>
        </form>
    )
}