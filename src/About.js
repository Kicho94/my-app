import React from 'react'
import axios from 'axios'
import Weather from './Weather'
import store from './redux/store'
import { weatherAction } from './redux/actions/weatherAction'

class About extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            weather: null
        }       
    }

    componentDidMount(){
        axios.get('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=94df371e7106c41b5e7b854b0a4e7423')
        .then((response)=> {
            this.setState({weather: response})
            submit = () =>{store.dispatch(weatherAction(this.state.weather))}     
            console.log(response)
        })
        .catch((error) =>{
            console.log(error)
     }) 
        }

    
    render(){
        return(
            <Weather refresh={this.componentDidMount}/>

        )
    }   
}

export default About
