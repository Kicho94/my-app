import React from 'react'
import { connect } from 'react-redux'


const cloud = {
    backgroundImage: "url(" + "https://www.thelocal.it/userdata/images/article/9d7ac9c39690c0930e230a40814655952495d3327c70f6c6f427b6514230720c.jpg" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}
const sun = {
    backgroundImage: "url(" + "https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/ts-space-sun-and-solar-viewing-facts-versus-fiction.jpg?itok=gaBs6QMS" + ")",
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
} 


class Weather extends React.Component{
    
   
    render(){
        var cloudy = null
        var sunny = null

        if(this.props.weather.weather){
        var cloudy = <div style={cloud} >
    <table>
        <tbody>
            <tr>
                <td>City : London</td>
                <td>Weather Description : {this.props.weather.weather.weather[0].description}</td>
                <td>Temperature : {this.props.weather.weather.main.temp}</td>
                <td><button onClick={this.props.submit}>Refresh</button></td>
                
            </tr>
        </tbody>
    </table>

</div>
        
    var sunny = <div style={sun} >
    <table>
        <tbody>
            <tr>
                <td>City : London</td>
                <td>Weather Description : {this.props.weather.weather.weather[0].description}</td>
                <td>Temperature : {this.props.weather.weather.main.temp}</td>
                <td><button onClick={this.props.submit}>Refresh</button></td>
                
            </tr>
        </tbody>
    </table>

</div>

if(this.props.weather.weather.weather[0].description !== "clear sky"){
    sunny = null
}
else if (this.props.weather.weather.weather[0].description === "clear sky"){
    cloudy = null
}
}



    return (
        <React.Fragment>
            <div>{sunny}</div>
            <div>{cloudy}</div>
            </React.Fragment>
            
        )
    }
}
function mapStateToProps (state) {
    return {
        weather : state.weatherReducer
    }
}

export default connect(mapStateToProps)(Weather)