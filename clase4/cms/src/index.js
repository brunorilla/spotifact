import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';

let initialState = {
    appTitle: 'Spotifact',
    items : [],
    playlists : [],
    profile : {},
    currentPlaylist : []
}

let store = createStore(function(state = initialState, action){
    if (action.type === 'FETCH_ITEMS'){
        state = {
            ...state,
            items: action.payload
        }
    }
    return state
})


ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
