const remoteURL = 'http://localhost:8088'

export const getAllTasks = () => {
    return fetch(`${remoteURL}/tasks`)
        .then(res=>res.json())
}

export const getTaskById = (taskId) => {
    return fetch(`${remoteURL}/tasks/${taskId}`)
        .then(res=>res.json())
}

export const addTask = (taskObj) => {
    return fetch(`${remoteURL}/tasks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskObj)
    })
        .then(res=>res.json())
}

export const deleteTask = (taskId) => {
    return fetch(`${remoteURL}/tasks/${taskId}`, { method: "DELETE" })
        .then(res => res.json())
}

export const updateTask = (updatedTask) => {
    return fetch(`${remoteURL}/tasks/${updatedTask.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask)
    })
        .then(res=>res.json())
}