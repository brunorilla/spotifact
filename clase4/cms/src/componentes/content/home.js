import React from 'react'
import './css/home.css'
import Banner from './home-dir/banner'
import Gallery from './home-dir/gallery'


class Home extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            items: []
        }

    }

    // Eventos del ciclo de vida

    // antes
    componentWillMount() {
        fetch('http://localhost:4000/items')
            .then(response => response.json())
            .then(data => this.setState({items: data}))
        }


    // despues

    render() {
        return(
            <div className="home">
                <Banner/>
                { this.state.items.map((item,i) =>  <Gallery key={i} data={item}/>) }
            </div>
        )
    }
}

export default Home