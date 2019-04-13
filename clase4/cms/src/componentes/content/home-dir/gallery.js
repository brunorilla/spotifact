import React from 'react'
import './css/gallery.css'
import Title from './gallery/title'
import Subcopy from './gallery/subcopy'
import Bar from './gallery/bar'
import Item from './gallery/item'

class Gallery extends React.Component{
    constructor(props){
        super(props)

    }


    render() {
        return(
            <div className="gallery">
                <Title data={this.props.data.title}/>
                <Subcopy data={this.props.data.subcopy}/>
                <Bar/>
                <Item data={this.props.data}/>
            </div>
        )
    }
}

export default Gallery