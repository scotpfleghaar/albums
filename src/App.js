/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Header from './components/Header';
import AlbumList from './components/AlbumList';


type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <View>
                <Header headerText="Albums!"/>
                <AlbumList/>
            </View>
        );
    }
}

const styles = StyleSheet.create({});
//http://rallycoding.herokuapp.com/api/music_albums