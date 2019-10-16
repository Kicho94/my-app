import {createStore, combineReducers, applyMiddleware} from 'redux'
import {userReducer} from './reducers/userReducer.js'
import logger  from 'redux-logger'
// creates an empty store object = {}



const singleReducer = combineReducers({
    userReducer,
})
const store = createStore(singleReducer, applyMiddleware(logger))

console.log(store.getState())

export default store