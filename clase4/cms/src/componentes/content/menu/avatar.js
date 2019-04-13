import React from 'react'
import './css/avatar.css'

class Avatar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul className="menu-ul">
                <li className="menu-li">
                   <img src="https://placeimg.com/48/48/people" alt=""/>
                </li>
            </ul>
        )
    }
}

export default Avatar