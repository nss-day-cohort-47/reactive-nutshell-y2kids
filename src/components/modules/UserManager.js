const remoteURL = 'http://localhost:8088'

// export const existingUserCheck = () => {
    
//     // If your json-server URL is different, please change it below!
//     return fetch(`${remoteURL}/users?email=${loginUser.email}`)
//         .then(res => res.json())
//         .then(user => user.length ? user[0] : false)
// }

export const getAllUsers = () => {
    return fetch(`${remoteURL}/users`)
    .then(result => result.json())
}