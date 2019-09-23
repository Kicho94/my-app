import React from 'react'

const css = {
    textAlign: 'center',
        color: 'Green',
       
}

class Home extends React.Component {
    constructor() {
        super()
        // Initial State
        this.state = {
            show: false
        }       
    }
    
    showOrHide = () => {
        // if (!this.state.show) {
        //     this.setState({show: true})
        // }  
        //    else { (this.state.show) 
        //     this.setState({show: false})
        // }
        this.setState({ show: !this.state.show})
    }
    
    //    Render method
    render () {
        // vo render se pokazuvaat najnovite state i props
        
        // let div = <div>Hello Semos!</div>
        // if (!this.state.show){
        //     div = null
        // }

        return (
        <React.Fragment>
        {this.state.show ? <div>Hello Semos!</div> : null}
        <button id='toggle' onClick={this.showOrHide}>Toggle me!</button>
        </React.Fragment>
        )
        
    }
    
}




export default Home