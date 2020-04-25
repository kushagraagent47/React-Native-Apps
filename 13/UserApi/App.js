import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ActivityIndicator, Alert } from 'react-native';
import {Title, Left, Right, Container, Header, Card, CardItem, List, ListItem } from 'native-base';
import * as Font from 'expo-font';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  getUserData = () => {
    return (
      fetch("https://api.covid19india.org/data.json")
        .then(
          response => response.json()
        )
        .then(responseJson => {
          this.setState({
            isLoading: false,
            dataSource: this.state.dataSource.concat(responseJson.statewise)
          })
        })
        .catch(error => {
          console.log(error)
        })
    )
  }

  _keyExtractor = (datasource, index) => datasource.state

  componentDidMount = async() => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
  })
  this.setState({ isReady: true })

    this.getUserData();
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator
            size="large"
            color="#01CBC6"
          />
        </View>
      )
    }

    return (
      <Container>
        <Header>
        <Title>Covid Stats</Title>
        </Header>

      <FlatList
        data={this.state.dataSource}
        keyExtractor={this._keyExtractor}
        renderItem={({ item }) => (
          <List>
            <ListItem>
              <Left>
              <Text>{item.state}</Text>
              </Left>
              <Right>
                <Text>{item.active}</Text>
              </Right>
            </ListItem>
          </List>
        )}
      ></FlatList>
            </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
