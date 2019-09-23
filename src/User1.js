import React from 'react'



class User1 extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div id='greeting' className='text' style={{border:'1px solid black', marginBottom: '2px'}}>
                    {this.props.name},
                    <br/>
                    {this.props.email}
                </div>
                
            </React.Fragment>
        )
    }
}

export default User1