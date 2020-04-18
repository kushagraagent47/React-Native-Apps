import React from 'react';
import { StyleSheet, Alert, Text, Image, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      uri: require('./src/images/dice1.png'),
      uri1: require('./src/images/dice2.png')
    }
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  }
  getRandomValue1 = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  playButtonPressed = () => {
    // Alert.alert("Hello" + this.getRandomValue());
    var number = this.getRandomValue();
    var number1 = this.getRandomValue1();
    if (number == 1) {
      this.setState({
        uri: require('./src/images/dice1.png')
      })
    }
    else if (number == 2) {
      this.setState({
        uri: require('./src/images/dice2.png')
      })
    }
    else if (number == 3) {
      this.setState({
        uri: require('./src/images/dice3.png')
      })
    }
    else if (number == 4) {
      this.setState({
        uri: require('./src/images/dice4.png')
      })
    }
    else if (number == 5) {
      this.setState({
        uri: require('./src/images/dice5.png')
      })
    }
    else if (number == 6) {
      this.setState({
        uri: require('./src/images/dice6.png')
      })
    }

    if (number1 == 1) {
      this.setState({
        uri1: require('./src/images/dice1.png')
      })
    }
    else if (number1 == 2) {
      this.setState({
        uri1: require('./src/images/dice2.png')
      })
    }
    else if (number1 == 3) {
      this.setState({
        uri1: require('./src/images/dice3.png')
      })
    }
    else if (number1 == 4) {
      this.setState({
        uri1: require('./src/images/dice4.png')
      })
    }
    else if (number1 == 5) {
      this.setState({
        uri1: require('./src/images/dice5.png')
      })
    }
    else if (number1 == 6) {
      this.setState({
        uri1: require('./src/images/dice6.png')
      })
    }

  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.image}
            source={this.state.uri}
          />
          <Image
            style={styles.image}
            source={this.state.uri1}
          />
        </View>
        <TouchableOpacity
          onPress={this.playButtonPressed}
        >

          <Text style={styles.Gamebutton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'contain'

  },
  Gamebutton: {
    margin: 35,
    fontSize: 20,
    color: "#FFF",
    fontWeight: "bold",
    borderWidth: 2,
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 8,
    borderColor: "#fff"
  },
  image: {
    width:150,
    height:150
  },
  imgContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  }

});
