import React from 'react'
import  Avatar from './menu/avatar'
import  Search from './menu/search'
import './css/menu.css'

class Menu extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="menu">
                <ul className="menu-ul">
                    <li className="menu-li">item 1</li>
                    <li className="menu-li">item 2</li>
                    <li className="menu-li">item 3</li>
                </ul>
                <Search/>
                <Avatar/>

            </div>
        )
    }
}

export default Menu