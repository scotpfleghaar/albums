import React from 'react';
import {Text, StyleSheet} from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
    return (
        <Card>
            <Text>{props.album.title}</Text>
        </Card>
    )
};

const styles = StyleSheet.create({});

export default AlbumDetail;