import * as React from 'react';
import { StyleSheet, View, Text, Image, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Camera } from "expo-camera";
import { FontAwesome } from "@expo/vector-icons";
import * as Permissions from 'expo-permissions';

export default class CameraApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            isFlashLightOn: Camera.Constants.FlashMode.off
        }
    }


    static navigationOption = {
        title: "PhotoClicker"
    }

    //Ask for permission

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === "granted"
        })
    }

    //FLIIPCAMERA
    flipCamera = () => {
        this.setState({
            type: this.state.type === Camera.Constants.Type.back
                ? Camera.Constants.Type.front
                : Camera.Constants.Type.back
        })
    }

    flashLight = () => {
        this.setState({
            isFlashLightOn: this.state.isFlashLightOn === Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
        })
    }

    //TakePicture
    takePicture = async () => {
        if (this.camera) {
            let photo = await this.camera.takePictureAsync();
            this.props.navigation.navigate("Home", { image: photo });
        }
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View></View>
        } else if (hasCameraPermission === false) {
            return <View><Text>No access to camera</Text></View>
        } else if (hasCameraPermission === true) {
            return (
                <View style={styles.container}>
                    <Camera
                        style={styles.cameraView}
                        type={this.state.type}
                        flashMode={this.state.isFlashLightOn}
                        ref={ref => {
                            this.camera = ref;
                        }}
                    >
                        <View style={styles.actionContainer}>
                            <TouchableOpacity
                                style={styles.iconHolder}
                                onPress={() => this.flipCamera()}
                            >
                                <FontAwesome
                                    name="camera"
                                    size={35}
                                    style={styles.icon}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.iconHolder}
                                onPress={() => this.takePicture()}
                            >
                                <FontAwesome
                                    name="circle"
                                    size={35}
                                    style={styles.icon}
                                />

                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => this.flashLight()}
                                style={styles.iconHolder}
                            >
                                <FontAwesome
                                    name="flash"
                                    size={35}
                                    style={styles.icon}
                                />

                            </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
            );
        }


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageHolder: {
        alignSelf: "center",
    },
    button: {
        margin: 20
    },
    cameraView: {
        flex: 1
    },
    actionContainer: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "transparent"
    },
    iconHolder: {
        flex: 1,
        alignItems: "center",
        alignSelf: "flex-end"
    },
    icon: {
        marginBottom: 10,
        color: "#fff"
    }
})