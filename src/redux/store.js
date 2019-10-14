import {createStore, combineReducers} from 'redux'
import {userReducer} from './reducers/userReducer.js'
// creates an empty store object = {}

const singleReducer = combineReducers({
    userReducer,
})
const store = createStore(singleReducer)

console.log(store.getState())

export default store