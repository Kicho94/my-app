import React from 'react'
import data from '../HwData'

import Homework from './Homework'

export default class HwWrapper extends React.Component{
  
           render(){
           let users=data.map(element => {return <Homework key={element.id} id={element.id} name={element.name} email={element.email}/>})
    
    return(
        <React.Fragment>
            {users}
        </React.Fragment>
       
    )
    }
}