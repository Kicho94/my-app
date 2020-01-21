import ReactDOM from 'react-dom'
import React from 'react'
import { Provider }  from 'react-redux'
import User from './User'
import Heading from './Heading'
import Menu from './Menu'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Login from './Login'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import User1 from './User1'
import Wrapper from './Wrapper'
import HwWrapper from './HwWrapper'
import 'bootstrap/dist/css/bootstrap.min.css'
import UserList from './UsersList'
import store from './redux/store.js'
import Table from './Table'
const app = document.getElementById('app')



const Routes = () => 
{
 
 return      <Router>
                <Menu />
                <Switch>
            <Route exact path ='/'component = {User} />
            <Route path ='/about' component = {About} />
            <Route path ='/users_list' component = {Table} />
            <Route path ='/login' component = {Login} />
            <Route
             path = '/user'
             render = {()=> 
             <Wrapper 
             component={UserList} 
             url='https://jsonplaceholder.typicode.com/users'/>} 
             methodType='GET'
             />
                           
                       
           
            <Route path = '/homework' render =
             {()=>
                <React.Fragment>
                    <HwWrapper >
                    </HwWrapper>
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

ReactDOM.render(
<Provider store = {store}>
<Routes/>
</Provider>, app) 