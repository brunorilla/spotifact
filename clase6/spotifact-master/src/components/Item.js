import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button,
} from 'reactstrap'

class Item extends Component {

    render() {
        return (
            <Card>
                <CardImg top width="100%"
                         src={this.props.data.cover}
                         alt={this.props.data.cover.alt}/>
                <CardBody>
                    <CardTitle>{this.props.data.title}</CardTitle>
                    <CardSubtitle>{this.props.data.subcopy}</CardSubtitle>
                    <CardText>{this.props.data.year}</CardText>
                    <Button onClick={this.props.addToPlaylist}>Add To Playlist</Button>
                </CardBody>
            </Card>
        );
    }
}


let mapDispatchToProps = (dispatch, props) => {
    return {
        addToPlaylist : () => {
            dispatch({type: 'ADD_TO_PLAYLIST', payload: props.data})
        }
    }
}


export default connect(null, mapDispatchToProps)(Item);
