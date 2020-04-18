import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import Partials from './src/components/partials'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Partials value="kush"/>
        <Image
          source={require('./src/images/email.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  }  
})