
export function writeUsersToStore(data){
    return{
        type: 'WRITE_USERS',
        payload: data
    }

}

function addUserToStore(data){
    return{
        type: 'SAVE_USER',
        payload: data
    }

}

function deleteUserToStore(data){
    return{
        type: 'DELETE_USER',
        payload: data
    }

}
