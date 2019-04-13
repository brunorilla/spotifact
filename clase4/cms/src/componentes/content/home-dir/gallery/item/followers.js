import React from 'react'
import './css/followers.css'

class Followers extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="followers">
                <h5>Followers: {this.props.data}</h5>
            </div>
        )
    }
}

export default Followers