import React from 'react'
import './Count.css'

class Count extends React.Component {
    render(){
        return (
            <div className='count'>
                <p>{this.props.children}</p>
                {this.props.count}
            </div>
        )
    }
}

export default Count;