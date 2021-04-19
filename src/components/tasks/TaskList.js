//Author: Bryson Goins. The purpose of this module is to display a list of all of the tasks. Also
// this module gives instructions for how to handle the delete buttons and/or the checkboxes being clicked

import React, { useState, useEffect } from 'react'
import { getAllTasks, deleteTask } from '../modules/TaskManager'
import { TaskCard } from './TaskCard'
import { useHistory } from 'react-router-dom'
import { updateTask } from '../modules/TaskManager'
import './TaskList.css'

export const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const history = useHistory();
    const currentUserId = parseInt(sessionStorage.getItem("nutshell_user"))

    const getTasks = () => {
        return getAllTasks().then(allTasks => {
            setTasks(allTasks)
        })
    }

    const handleDeleteTask = (taskId) => {
        deleteTask(taskId)
            .then(() => getAllTasks().then(setTasks))
    }

    const handleCheckboxClick = (event) => {
        const taskId = event.target.id.split("--")[1]
        
        getAllTasks()
        .then(allTasks => {
            const targetedTask = allTasks.find(task => task.id === parseInt(taskId))
            targetedTask.isComplete = true
            return targetedTask
        })
        .then(updatedTask => {
            updateTask(updatedTask)
            .then(() => {
                getTasks()
            })         
        })
    }



    useEffect(() => {
        getTasks();
    }, [])

    return (
        <div className="taskTracker">
            <div className="taskTopBar">
                <button type="button" onClick={() => history.push("/tasks/create")}>Add Task</button>
            </div>
            <div className="listAllTasks">
                {tasks.map(task => {
                    if (task.isComplete === false && task.userId === currentUserId) {
                        return <TaskCard key={task.id} task={task} handleCheckboxClick={handleCheckboxClick} handleDeleteTask={handleDeleteTask} />
                    }
                })}
            </div>
        </div>
    )
}