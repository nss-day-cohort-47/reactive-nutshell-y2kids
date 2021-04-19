const remoteURL = 'http://localhost:8088'

export const getAllPMs = () => {
    return fetch(`${remoteURL}/privateMessages/?_expand=user`)
        .then(res=>res.json())
}

export const getPMbyId = (id) => {
    return fetch(`${remoteURL}/privateMessages/${id}/?_expand=user`)
        .then(res=>res.json())
}

export const addPM = (PMobj) => {
    return fetch(`${remoteURL}/privateMessages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(PMobj)
    })
        .then(res=>res.json())
}
