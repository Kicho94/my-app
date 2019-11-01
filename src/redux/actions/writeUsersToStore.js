import axios from "axios"


export function writeUsersToStore(data){
    return{
        type: 'WRITE_USERS',
        payload: data
    }

}

export function addUserToStore(user){
    return function (dispatch){
        axios.get('https://jsonplaceholder.typicode.com/users').then(()=>{
            dispatch({
                type: 'SAVE_USER',
                payload: user
            })
        })
        

    }
    
    }



export function deleteUserToStore(data){
    return{
        type: 'DELETE_USER',
        payload: data
    }

}
