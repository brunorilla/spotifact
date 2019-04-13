import React from 'react'
import './css/title.css'

class Title extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <h4 className="title">
                Year: {this.props.data}
            </h4>
        )
    }
}

export default Title