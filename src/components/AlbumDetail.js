import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import {Linking} from 'react-native';

const AlbumDetail = (props) => {
    const {album: {thumbnail_image, artist, title, image, url}} = props;
    const {thumbNail, headerContentStyle, thumbnailContainer, headerText, imageStyle} = styles;
    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainer}>
                    <Image style={thumbNail} source={{uri: thumbnail_image}}/>
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerText}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={imageStyle} source={{uri: image}}/>
            </CardSection>

            <CardSection>
                <Button onButtonPress={()=> Linking.openURL(url)}>Buy Now</Button>
            </CardSection>
        </Card>
    )
};

const styles = StyleSheet.create({
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerText: {
        fontSize: 18
    },
    thumbNail: {
        height: 50,
        width: 50,
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
        marginLeft: 10
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

});

export default AlbumDetail;