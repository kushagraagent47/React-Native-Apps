import React, {Component} from 'react';
import {Text, StyleSheet } from 'react-native';


export default class Partials extends Component {
  render() {
    return (
    <Text style={styles.textStyle}>{this.props.value}</Text>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontSize: 18,
    backgroundColor: "orange",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 10
  }
})