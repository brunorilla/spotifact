import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import '../../App.css'
import './css/navigation.css'
import Content from '../content/content'
import Browse from '../content/browse'

class Navigation extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="navigation">
                <ul>
                    <li>Home</li>
                    <li>Browse</li>
                    <li>Radio</li>
                </ul>
            </div>
        )
    }
}

export default Navigation