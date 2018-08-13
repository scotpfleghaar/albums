// Import Libraries for making a component
import React from 'react';
import {Text, StyleSheet} from 'react-native';

// Make a component
const Header = () => {
    return <Text style={styles.header}>Albums!</Text>
}

const styles = StyleSheet.create({
    //Styles are camelCased rather than dash-cased
    header : {
        fontSize: 30
    }
});

// Make component available to other parts of the app
export default Header;