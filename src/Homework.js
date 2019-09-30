import React from 'react'
import {Modal, ModalHeader, ModalBody, ModalFooter, Button, Container} from 'reactstrap'
class Homework extends React.Component{
  constructor(){
  super()
  this.state={show:false}
  }
  toggle = () => {
    
    this.setState({show: !this.state.show})
  
  }
   
  render() {  
        return(  
          <Container>
         <React.Fragment>
          
          <table border='1px solid black' width='100%'  >
              <tr>
              <td width='25%'>{this.props.id}</td>
              <td width='25%'>{this.props.name}</td>
              <td width='25%'>{this.props.email}</td>
              <td width='10%'><Button color='primary' onClick={this.toggle}>Launch Modal</Button></td>
            </tr>
          </table>
        <Modal isOpen={this.state.show}>
          <ModalHeader>
            My First Modal
          </ModalHeader>
          <ModalBody>
          <label>Name</label>
          <input type='text' placeholder={this.props.name}/>
          <br/>
          <label>Id</label>
          <input type='number' placeholder={this.props.id}/>
          <br/>
          <label>E-mail</label>
          <input type='text' placeholder={this.props.email}/>

           </ModalBody>
          <ModalFooter>
            <Button >Save</Button>
            <Button>Delete</Button>
            <Button onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
           
        </React.Fragment> 
        </Container>  
      )
    }

}


export default Homework