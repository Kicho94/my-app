import React from 'react'
import data from '../data'
import User1 from './User1'

export default class Wrapper extends React.Component{
    render(){
        
      let users= data.map(element => {return <User1 key={element.id} name={element.name} email={element.email} /> })
       return (
               <React.Fragment>   
        {users}
        {this.props.children}
        </React.Fragment>
               )
    }
    }
   

