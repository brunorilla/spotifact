import React from 'react'
import './css/subcopy.css'

class Subcopy extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <h3 className="subcopy">
                {this.props.data}
            </h3>
        )
    }
}

export default Subcopy