import React from 'react'
import '../../App.css'
import Menu from './menu'
import './css/content.css'
import Home from "./home";

class Content extends React.Component{

    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="content">
                <Menu/>
                <Home/>
            </div>
        )
    }


}

export default Content