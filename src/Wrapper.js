import React from 'react'
import data from '../data'
import User1 from './User1'
import axios from 'axios'
export default class Wrapper extends React.Component{
        constructor(props){
               super(props)
               this.state = {
                     users: []
               }
        }
    componentDidMount () {
       axios.get('https://jsonplaceholder.typicode.com/users')
       .then((response) => {
              const users = response.data.map(element => {
             return <User1 key={element.id} name={element.name} email={element.email} />      
              })
              
              this.setState({users: users})
      
       }) 
       .catch((error) =>{
              console.log(error)
       }) 
    }
      
    
    render(){
        
                                                                      //       let users= data.map(element => 
                                                                      //        {return <User1 key={element.id} name={element.name} email={element.email} /> })
       return (
               <React.Fragment>   
        {this.state.usersusers}
        {this.props.children}
        </React.Fragment>
               )
    }
    }
   

