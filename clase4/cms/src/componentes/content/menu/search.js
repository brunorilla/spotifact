import React from 'react'
import './css/search.css'

class Search extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <ul className="menu-ul">
                <li className="menu-li"><input type="search"/></li>
            </ul>
        )
    }
}

export default Search