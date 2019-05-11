/* Queries   */

const axios = require('axios');

const endpoints = {
    playlist: 'http://localhost:3000/playlists/'
};
/* If we want to get all the Playlists */

function getPlaylists() {
    return axios.get(endpoints.playlist)
}

/* Get one playlist */

function getPlaylist(id){
    return axios.get(endpoints.playlist + id)
}


/* create a playlist */

function newPlaylist(name){
    return axios.post(endpoints.playlist, {name})
}

/* delete a playlist */

function deletePlaylist(id){
    return axios.delete(endpoints.playlist + id)
}

/* rename a playlist */

function renamePlaylist(id, name){
    return axios.patch(endpoints.playlist + id, {name})
}

/* like a playlist */

function likePlaylist(id){
    return axios.post(endpoints.playlist + id + '/likes')
}

/* dislike a playlist */


function dislikePlaylist(id){
    return axios.delete(endpoints.playlist + id + '/likes')
}

/* deletePlaylist(7).then(response => console.log(response.data))*/
/*
renamePlaylist(6, 'ultima nueva playlist').then(response => console.log(response.data))
/*
newPlaylist('Los mejores del trap').then(response=> console.log(response.data))
*/
getPlaylists().then(response => console.log(response.data))

module.exports = {
    getPlaylists,
    getPlaylist,
    deletePlaylist,
    renamePlaylist,
    newPlaylist
}