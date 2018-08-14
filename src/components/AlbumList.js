import React, {Component} from 'react';
import {View} from 'react-native';
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
                <AlbumDetail album={album} key={album.title}/>
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