import React, {useState, useEffect} from 'react'
import {updateTask, getTaskById} from '../modules/TaskManager'
import {useParams, useHistory} from 'react-router-dom'

export const TaskEditForm = () => {
    const [task, setTask] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const {taskId} = useParams()
    const history = useHistory()

    const handleFieldChange = event => {
        const stateToChange = {...task}
        stateToChange[event.target.id] = event.target.value;
        setTask(stateToChange)
    }

    const updateExistingTask = event => {
        event.preventDefault()
        setIsLoading(true)

        const editedTask = {
            id: task.id,
            name: task.name,
            estCompletionDate: task.estCompletionDate,
            isComplete: false,
            //Add userId property here once it is added correctly in TaskForm.js
        }

        updateTask(editedTask)
            .then(() => history.push("/tasks"))
    }

    const handleCancelEdit = () => {
        history.push("/tasks")
    }

    useEffect(() => {
        getTaskById(taskId)
            .then(task => {
                setTask(task);
                setIsLoading(false);
            })
    }, [])

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">Edit Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Task:</label>
                    <input type="text" id="name" onChange={handleFieldChange} required className="form-control" value={task.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="estCompletionDate">Estimated Completion Date:</label>
                    <input type="date" id="estCompletionDate" onChange={handleFieldChange} required className="form-control" value={task.estCompletionDate} />
                </div>
            </fieldset>
            <button onClick={handleCancelEdit}>Cancel</button>
            <button disabled={isLoading} onClick={updateExistingTask}>Save Task</button>
        </form>
    )
}