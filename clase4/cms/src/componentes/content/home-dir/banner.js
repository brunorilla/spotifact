import React from 'react'
import './css/banner.css'

class Banner extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="banner-wrapper">
                <img className={"banner-img"} src="https://placeimg.com/1024/150/nature" alt=""/>
            </div>
        )
    }
}

export default Banner