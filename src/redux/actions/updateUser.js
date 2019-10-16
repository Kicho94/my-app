export function updateUser (username, password,adress) {
    return { 
        type: 'UPDATE_USER_AND_PASS',
        payload: {
            username, password,adress
        }
    }
        }