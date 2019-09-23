import React from 'react'

const css = {
    textAlign: 'center',
        color: 'Green',
       
}

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    checkInput = (event) => {
        const inputValue = event.target.value
        if (event.target.value.indexOf('@') <= 0){
            console.log('imase greska  mejlo')    
        }
        this.saveInput(event)
    }

    submit = () => {
        alert(this.state.username + ' ' + this.state.password)
    }

    saveInput = () => {
        this.setState({[event.target.id] : event.target.value})   
    }

    render() {
        return <React.Fragment>
                <input id='username' 
                placeholder='Username' 
                onChange={this.checkInput}
                />
                <input id='password' placeholder='Password' onChange={this.saveInput}/>
                <button id='submit' onClick={this.submit}>Log In!</button>
             </React.Fragment>
    }   
}

export default Login