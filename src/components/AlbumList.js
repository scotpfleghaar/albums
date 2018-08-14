import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Axios from 'axios';

class AlbumList extends Component {
    componentWillMount() {
        //  https://rallycoding.herokuapp.com/api/music_albums
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    render() {
        return (
            <View>
                <Text> Album List</Text>
            </View>
        )
    }
}

export default AlbumList;