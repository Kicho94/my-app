import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {writeUsersToStore,
        addUserToStore,
        deleteUserToStore
        } from './redux/actions/writeUsersToStore'
import './style.css'
class Table extends React.Component {
    constructor(){
        super()
        this.state= {
            showModal: null
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            //zapisi vo redux
            this.props.writeUsersToStore(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
     saveUser = (id) => {
         const newUser = {
        id:id,
        name: document.getElementById('name').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value          



         }
        this.props.addUserToStore(newUser)
        this.setState({showModal: null})
    }
    
    addUser = () => {
        this.setState({showModal:
                    <div className='my-modal'>
                       <div className='form-container'>
                      <div className='text-container'> ADD NEW USER</div> 
                        <input id='name' type='text' className='form-control' placeholder='name'/>
                        <input  id='username' type='text' className='form-control' placeholder='username'/>
                        <input id='email' type='text' className='form-control' placeholder='email'/>
                        <input  id='address' type='text' className='form-control' placeholder='address'/>
                        <button id='save' className='btn btn-success' onClick={() => this.saveUser()}>Save</button>
                        <button id='close' className='btn btn-secondary' onClick={()=> this.setState({showModal: null})}>Close</button>
                        </div>
                    </div>})
    }
    editUser = (user) => {
        this.setState({showModal:
                    <div className='my-modal'>
                        <div className='form-container'>
                            <div>EDIT USER</div>
                        <input id='name' defaultValue={user.name} className='form-control'  />
                        <input id='username' defaultValue={user.username} className='form-control' />
                        <input id='email' defaultValue={user.email} className='form-control' />
                        <input id='address' defaultValue={user.address.city + ' ' + user.address.street + ' ' + user.address.suite} className='form-control' />
                        <button id='save' className='btn btn-success' onClick={() => this.saveUser(user.id)} >Save</button>
                        <button id='close' className='btn btn-secondary' onClick={()=> this.setState({showModal: null})} >Close</button>
                        </div>
                    </div>})
    }

    deleteUser = (user) => {
        this.props.deleteUserToStore(user)
    }

    render(){

        let header = null
        let usersList= null
        if(this.props.users){
            // header = this.props.users.map((users)=>{
                
            // })
            usersList = this.props.users.map((user)=>{
                return <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                        {`${user.address.street} ${user.address.suite}`}
                    </td>
                    <td>
                        <button id='edit' className='btn btn-light' onClick={() => this.editUser(user)}>Edit</button>
                        <button id='delete' className='btn btn-danger' onClick={() => this.deleteUser(user)}>Delete</button>

                    </td>
                </tr>
            })

        }

        return(
            <table className = 'table table-dark'>
                {this.state.showModal}
                
                <thead>
               <tr>
                <th>
                    <button id='add' className='btn btn-success' onClick={this.addUser}>
                        Add new user
                    </button>
                </th>
                </tr>
                </thead>
                
                <tbody>
                    {usersList}
                </tbody>
            </table>
        )

    }
}
function mapStateToProps(state){
    return {
        users: state.usersTableReducer.users
    }
}
function mapDispatchToProps(dispatch){
    return{
        writeUsersToStore: (...data) => dispatch(writeUsersToStore(...data)),
        addUserToStore: (...data) => dispatch(addUserToStore(...data)),
        deleteUserToStore: (...data) => dispatch(deleteUserToStore(...data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table)