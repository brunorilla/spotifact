import React from 'react'
import './css/item.css'
import Img from './item/img'
import Title from './item/title'
import Followers from "./item/followers";

class Item extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className="item">
                <Img data={this.props.data}/>
                <Title data={this.props.data.year}/>
                <Followers data={this.props.data.followers}/>
            </div>
        )
    }
}

export default Item