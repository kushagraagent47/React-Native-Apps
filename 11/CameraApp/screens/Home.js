import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Home extends React.Component {

    static navigationOption = {
        title: "PhotoClicker"
    }

    render() {

        
        let photo = this.props.route.params.image
        return (
            <View style={styles.container}>
                <Image 
                    resizeMode="center"
                    styles={styles.imageHolder}
                    source={photo === "empty" ? require("../assets/email.png") : photo}
                />
                <Button 
                    title="Take Photo"
                    style={styles.button}
                    onPress={ () => {
                        this.props.navigation.navigate("Camera")
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center"
    },
    imageHolder: {
        alignSelf: "center",
        height: 300,
        margin: 20
    },
    button: {
        margin: 20
    }
})