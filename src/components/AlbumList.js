import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {

    state = {
        albums: []
    };

    componentWillMount() {
        //  https://rallycoding.herokuapp.com/api/music_albums
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => this.setState({albums: response.data})
        ).catch((error) => console.log(error))
    }

    renderAlbums = () => {
        return this.state.albums.map((album, index) => {
            return (
                <AlbumDetail key={album.title}>{album.title}</AlbumDetail>
            )
        })
    };

    render() {
        return (
            <View>
                {this.renderAlbums()}
            </View>
        )
    }
}

export default AlbumList;