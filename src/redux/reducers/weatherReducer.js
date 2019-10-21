
export function weatherReducer (state = {weather : null}, action){
   
    switch (action.type){
        case 'UPDATE_WEATHER':{
            return {...state,
            weather: action.payload.weather}
        }
        default: {
            return {...state}
        }
    }
}