// Import Libraries for making a component
import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

// Make a component
const Header = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Albums!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    //Styles are camelCased rather than dash-cased
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height: 30
    },
    header: {
        fontSize: 30
    }
});

// Make component available to other parts of the app
export default Header;