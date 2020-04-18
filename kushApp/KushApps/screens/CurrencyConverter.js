import React from 'react';
import { StyleSheet, Platform, Text, View, SafeAreaView, Keyboard, TextInput, Button, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.0212,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.0000041
}

export default class CurrencyConverter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      resultValue: "0.0"
    };
  }

  buttonPressed = (currency) => {
    if (this.state.inputValue == "") {
      Alert.alert("Enter Some Value")
    }
    let result = parseFloat(this.state.inputValue) * currencyPerRupee[currency];
    this.setState({
      resultValue: result.toFixed(2)
    });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <SafeAreaView style={styles.container}>
          <View style={styles.screenView}>
            <View style={styles.resultContainer}>
              <Text style={styles.resultValue}>
                {this.state.resultValue}
              </Text>
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                selectionColor="#FFF"
                placeholder="Enter Value"
                keyboardType="numeric"
                value={this.state.inputValue}
                onChangeText={input => this.setState({
                  inputValue: input
                })}
              />
            </View>
            <View style={styles.converterButtonContainer}>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DOLLAR")}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>DOLLAR</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("DOLLAR")}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>EURO</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("POUND")}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>POUND</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("RUBEL")}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>RUBEL</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("AUSDOLLAR")}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>AUS $</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.buttonPressed("CANDOLLAR")}
                style={styles.converterButton}
              >
                <Text style={styles.converterButtonText}>CAN $</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4B0BD',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  },
  screenView: {
    flex: 1
  },
  resultContainer: {
    height: 70,
    marginTop: 20,
    justifyContent: "center",
    borderColor: "#c1c1c1",
    backgroundColor: "#1BCA9B",
    alignItems: "center",
    borderWidth: 5
  },
  resultValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff"
  },
  inputContainer: {
    height: 70,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 5,
    borderColor: "#c1c1c1",
    backgroundColor: "#535C68"
  },
  input: {
    fontSize: 25,
    color: "#FFF"
  },
  converterButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    borderColor: "#fff",
    borderWidth: 2
  },
  converterButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0A79DF",
    height: 100,
    borderColor: "#C1c1c1",
    borderWidth: 2,
    width: "33.3%"
  },
  converterButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold"
  }
});
