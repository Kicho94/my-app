import React from 'react'
import data from '../HwData'
import axios from 'axios'
import Homework from './Homework'


export default class HwWrapper extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            users: null
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            const users = response.data.map(element => {
           return <Homework key={element.id} id={element.id} name={element.name} email={element.email} />      
            })
            
            this.setState({users: users})
    
     }) 
     .catch((error) =>{
            console.log(error)
     }) 
    }
  
           render(){
        //    let users=data.map(element => {return <Homework key={element.id} id={element.id} name={element.name} email={element.email}/>})
    
    return(
        <React.Fragment>
            {this.state.users}
        </React.Fragment>
       
    )
    }
}