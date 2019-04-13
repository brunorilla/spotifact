import React from 'react'
import './css/img.css'

class Img extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="img">
                <img src={this.props.data.cover}/>
            </div>
        )
    }
}

export default Img