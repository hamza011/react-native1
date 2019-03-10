import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Text style={styles.helloText}>Hello Component!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    helloText: {
        fontSize: 40,
    }
})