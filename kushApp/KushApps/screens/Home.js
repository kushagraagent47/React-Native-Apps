import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native'
import { Image } from 'react-native';
import * as Font from 'expo-font';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import Expo from 'expo';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount = async () => {
        await Font.loadAsync({
            Roboto: require('native-base/Fonts/Roboto.ttf'),
            Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
        })
        this.setState({ isReady: true })
    }

    render() {
        if (!this.state.isReady) {
            return <ActivityIndicator />
        }
        return (
            <Container>
                <Header />
                <Content>
                    <Card>
                        <CardItem>
                            <Left>
                                <Thumbnail source={{ uri: 'https://media-exp1.licdn.com/dms/image/C4E03AQFLKSTf8Z81Ag/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=A9UCd4-SGJfPi0cwXLWjgpYGmyWmtCe4J08N7L__QO8' }} />
                                <Body>
                                    <Text>Kushagra Kumar</Text>
                                    <Text note>GeekyAnts</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{ uri: 'https://miro.medium.com/max/700/1*C3kxjCrJy-aWSMpe2chfaA.png' }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Text>This app consist of mini fun games created for learning purpose</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}