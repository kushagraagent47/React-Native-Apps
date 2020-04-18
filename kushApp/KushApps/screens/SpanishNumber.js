import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Audio } from 'expo-av';

const listBackgroundColors = {
  1: "#B95E7F",
  2: "#2A0B11",
  3: "#C916E9",
  4: "#DCBF0A",
  5: "#6AC761",
  6: "#79B258",
  7: "#8473FD",
  8: "#34D7CF",
  9: "#4E4D69",
  10: "#C17B2A"
}

const soundsList = {
  one: require('./assets/one.wav'),
  two: require('./assets/two.wav'),
  three: require('./assets/three.wav'),
  four: require('./assets/four.wav'),
  five: require('./assets/five.wav'),
  six: require('./assets/six.wav'),
  seven: require('./assets/seven.wav'),
  eight: require('./assets/eight.wav'),
  nine: require('./assets/nine.wav'),
  ten: require('./assets/ten.wav')
}

export default class SpanishNumber extends React.Component {

  playSound = async number => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundsList[number]
      await soundObject.loadAsync(path)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {

    }
  }
  //TODO: Function to play gaana
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.gridContainer}>
          <Image
            style={styles.logo}
            source={require('./assets/logo.png')}
          />
          <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[1]}, styles.item]}
                onPress = {() => {
                  this.playSound("one")
                }}
              >
                <Text style={styles.itemText}>One</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[2]}, styles.item]}
                onPress = {() => {
                  this.playSound("two")
                }}
              >
                <Text style={styles.itemText}>Two</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[3]}, styles.item]}
                onPress = {() => {
                  this.playSound("three")
                }}
              >
                <Text style={styles.itemText}>Three</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[4]}, styles.item]}
                onPress = {() => {
                  this.playSound("four")
                }}
              >
                <Text style={styles.itemText}>Four</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[5]}, styles.item]}
                onPress = {() => {
                  this.playSound("five")
                }}
              >
                <Text style={styles.itemText}>Five</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[6]}, styles.item]}
                onPress = {() => {
                  this.playSound("six")
                }}
              >
                <Text style={styles.itemText}>Six</Text>
              </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[7]}, styles.item]}
                onPress = {() => {
                  this.playSound("seven")
                }}
              >
                <Text style={styles.itemText}>Seven</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[8]}, styles.item]}
                onPress = {() => {
                  this.playSound("eight")
                }}
              >
                <Text style={styles.itemText}>Eight</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[9]}, styles.item]}
                onPress = {() => {
                  this.playSound("nine")
                }}
              >
                <Text style={styles.itemText}>Nine</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
              <TouchableOpacity
                style={[ {backgroundColor: listBackgroundColors[10]}, styles.item]}
                onPress = {() => {
                  this.playSound("ten")
                }}
              >
                <Text style={styles.itemText}>Ten</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gridContainer: {
    flex: 1,
    margin: 5
  },
  logo: {
    alignSelf: "center",
    marginTop: 50
  },
  rowContainer: {
    flexDirection: "row"
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2
  },
  itemText: {
    color: "#fff",
    fontSize: 20
  }
});
