import fetchJsonp from 'fetch-jsonp';

export function loadUsers() {
    return dispatch => {
        return fetchJsonp('https://api.github.com/users')
            .then(response => response.json())
            .then(response => {
                dispatch(loadUsersSuccess(response.data))
            })
    };
}

export function getUserDetails(userName) {
    return dispatch => {
        return fetchJsonp(`https://api.github.com/users/${userName}`)
            .then(response => response.json())
            .then(response => {
                dispatch(loadUserDetailsSuccess(response.data))
            })
            .catch(err => {
                throw err;
            });
    };
}

export function loadUsersSuccess(usersList) {
    return {
        type: "LOAD_USERSLIST_SUCCESS",
        usersList
    };
}

export function loadUserDetailsSuccess(user) {
    return {
        type: "LOAD_USER_SUCCESS",
        user
    };
}
