import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TouchableOpacity } from 'react-native';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      randomColor: null,
      buttonRandomColor: null
    };
  }

  getRandomColor = () => {
    return(
      "rgb(" +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      ")"
    )
  }
  getButtonRandomColor = () => {
    return(
      "rgb(" +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      "," +
      Math.floor((Math.random() * 256)) +
      ")"
    )
  }

  myButtonPressed = () => {
    this.setState({randomColor: this.getRandomColor()}),
    this.setState({buttonRandomColor: this.getButtonRandomColor()})
    }


  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomColor}]}>
        <TouchableOpacity
          onPress={this.myButtonPressed}
        >
          <Text style={[styles.text, {backgroundColor: this.state.buttonRandomColor}]}>Change Color</Text>
        </TouchableOpacity>
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
  text: {
    fontSize: 30,
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#000",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FFF'
  }
});
