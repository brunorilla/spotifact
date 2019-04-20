import React, {Component} from 'react';
import {CardDeck} from 'reactstrap'
import Item from './Item'
import {connect} from 'react-redux'
import axios from 'axios';

class Gallery extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {
    /*
        fetch('http://localhost:3004/items')
            .then(response => response.json())
            .then(data => this.setState({items: data}))

    */
        axios('http://localhost:3004/items').then(response =>{
            this.props.fetchItems(response.data)
        })

    }


    render() {
        return (
            <CardDeck>
                <h1>{this.props.appTitle}</h1>
                {this.props.items.map((item, i) => <Item key={i} data={item} />)}
            </CardDeck>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        items : state.items,
        appTitle: state.appTitle
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        fetchItems : (data)=> {
            dispatch({type: 'FETCH_ITEMS', payload: data})
        },
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Gallery);
