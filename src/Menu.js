import React from 'react'
import  './style.css'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const Menu = () =>{
    return (<ul >
            <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/about'>About</Link>
            </li>
            <li>
            <Link to='/users_list'>Users List</Link>
            </li>
            <li>
            <Link to='/login'>Login</Link>
            </li>
            <li>
            <Link to='/user'>User</Link>
            </li>
            <li>
            <Link to='/homework'>Homework</Link>
            </li>
           </ul>)
}

export default Menu