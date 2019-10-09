import React from 'react'
import User1 from './User1'

const UserList = (props) => {
    return props.data.map(element =>{
        return <User1 key={element.id} id={element.id} name={element.name} email={element.email} />
    })

}

export default UserList