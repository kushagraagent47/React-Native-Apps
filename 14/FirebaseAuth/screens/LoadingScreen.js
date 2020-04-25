import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import * as firebase from 'firebase';

export default class LoadingScreen extends React.Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged((authenticate) => {
            if (authenticate) {
                this.props.navigation.navigate("HomeScreen")
            } else {
                this.props.navigation.navigate("Signin")
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>Loading</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
