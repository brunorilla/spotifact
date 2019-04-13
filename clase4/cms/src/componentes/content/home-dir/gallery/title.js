import React from 'react'
import './css/title.css'

class Title extends React.Component{
    constructor(props){
        super(props)

    }
    render() {
        return(
            <h2 className="title">
                {this.props.data}
            </h2>
        )
    }
}

export default Title