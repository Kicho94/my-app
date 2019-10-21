import {createStore, combineReducers, applyMiddleware} from 'redux'
import {userReducer} from './reducers/userReducer.js'
import logger  from 'redux-logger'
import {weatherReducer} from './reducers/weatherReducer.js'
import {usersTableReducer} from './reducers/usersTableReducer'
// creates an empty store object = {}



const singleReducer = combineReducers({
    userReducer, 
    weatherReducer,
    usersTableReducer
})
const store = createStore(singleReducer, applyMiddleware(logger))

console.log(store.getState())

export default store