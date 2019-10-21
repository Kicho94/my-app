import React from 'react'
import store from './redux/store'
import { updateUser } from './redux/actions/updateUser'
import Alert from './Alert.js'
import { deleteUser } from './redux/actions/deleteUser'


const cloud = {
    backgroundImage: "url(" + "https://www.thelocal.it/userdata/images/article/9d7ac9c39690c0930e230a40814655952495d3327c70f6c6f427b6514230720c.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            adress: '',
        }
    }

    checkInput = (event) => {
        
        if (event.target.value.indexOf('@') <= 0){
            console.log('imase greska  mejlo')    
        }
         this.saveInput(event)
    }

    submit = () => {
        store.dispatch(updateUser(this.state.username, this.state.password, this.state.adress))
    }

    saveInput = () => {
        this.setState({[event.target.id] : event.target.value})   
    }

    delete = () => {
        store.dispatch(deleteUser())
    }

    render() {
        return <React.Fragment >
                   <Alert/>
               <input id='username' 
                placeholder='Username' 
                onChange={this.checkInput}
                />
                <input id='adress' 
                placeholder='Adress' 
                onChange={this.saveInput}
                />
                <input id='password' placeholder='Password' onChange={this.saveInput}/>
                <button id='submit' onClick={this.submit}>Log In!</button>
                <button id='delete' onClick={this.delete}>Delete</button>
                
             </React.Fragment>
    }   
}

export default Login