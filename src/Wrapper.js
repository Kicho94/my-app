import React from 'react'
import axios from 'axios'
import Error from '../Error'



export default class Wrapper extends React.Component{
        constructor(props){
               super(props)
               this.state = {
                     data: [],
                     error: null,
                     loading: false
               }
        }
    componentDidMount () {
           this.setState({ loading: true})
       axios({
              method: this.props.methodType,
              url: this.props.url}
       )
       .then((response) => {
              
      this.setState({data: response.data, loading: false})
      
       }) 
       .catch((error) =>{
              this.setState({error: <Error />, loading: false })
       }) 
    }
      
    
    render(){
        
                                                                      //       let users= data.map(element => 
                                                                      //        {return <User1 key={element.id} name={element.name} email={element.email} /> })
       return (
         <React.Fragment>   
        <this.props.component data={this.state.data}/>
         {this.state.error}
         {this.state.loading && <div>LOADING...</div>}
        </React.Fragment>
               )
    }
    }
   

