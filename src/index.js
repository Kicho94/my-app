import ReactDOM from 'react-dom'
import React from 'react'
import User from './User'
import Heading from './Heading'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
const app = document.getElementById('app')



const Routes = () => 
{
 
 return      <Router>
                <Menu />
                <Switch>
            <Route exact path ='/'component = {Home} />
            <Route path ='/about' component = {About} />
            <Route path ='/contact' component = {Contact} />
            <Route path ='/login' component = {Login} />
            <Route path = '/user' render = {(props)=>
                <React.Fragment>
                     <Heading {...props} />
                     <User {...props} />
                </React.Fragment>
            }
            />
               </Switch>
               </Router>  
}
            
// const Container = () => {
//     return (
//     <React.Fragment>
//         <Heading />
//         <User />
//     </React.Fragment>
//             )
// }   

ReactDOM.render(<Routes/>, app) 