

export function userReducer (state = {username: null, password: null, adress: null}, action) {
    
    switch (action.type) {
        case 'UPDATE_USER_AND_PASS':{
            return {...state, 
                username: action.payload.username,
                password: action.payload.password,
                adress: action.payload.adress    
            }
        }
        case 'DELETE_USER_AND_PASS': {
            return { ...state,
                username: null,
                password: null,
                adress: null
               
            }
        }
        default: {
            return {...state}
        }
    }

}