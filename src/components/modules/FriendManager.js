const remoteURL = 'http://localhost:8088'

export const getFriendById = (id) => {
    return fetch(`${remoteURL}/friends/${id}`)
    .then(res => res.json())
}

export const getAllFriends = () => {
    return fetch(`${remoteURL}/friends?_expand=user`)
    .then(result => result.json())
}

export const deleteFriend = (id) => {
    return fetch(`${remoteURL}/friends/${id}`, {
        method: "DELETE"
    }).then(result => result.json())
}

export const addFriend = (newFriend) => {
    return fetch(`${remoteURL}/friends`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFriend)
    }).then(response => response.json())
}

export const updateFriend = (editedFriend) => {
    return fetch(`${remoteURL}/friends/${editedFriend.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(editedFriend)
    }).then(res => res.json());
}