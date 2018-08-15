import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Card from './Card';
import CardSection from './CardSection'

const AlbumDetail = (props) => {
    const {album: {thumbnail_image, artist, title}} = props;
    const {thumbNail, headerContentStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View>
                    <Image style={thumbNail} source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text>{artist}</Text>
                    <Text>{title}</Text>
                </View>
            </CardSection>
        </Card>
    )
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbNail: {
        height: 50,
        width: 50,
        marginRight: 5
    }
});

export default AlbumDetail;