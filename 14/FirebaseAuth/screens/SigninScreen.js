import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, Image, TouchableOpacity, Alert } from 'react-native';

import * as firebase from 'firebase';
import { Form, Item, Input, Label, Button } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class SigninScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

  signInUser = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(
      this.props.navigation.navigate("HomeScreen")
    )
    .catch(error => {
      Alert.alert(error.message)
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container}
        behavior="position" enabled
      >
          <View style={styles.logoContainer}>
            <Image
              source={require('../assets/logo.png')}
            />
            <Text>React Native APP</Text>
          </View>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={email => this.setState({ email })}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry={true}
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="default"
                onChangeText={password => this.setState({ password })}
              />
            </Item>
            <Button
              style={styles.button}
              full
              rounded
              onPress={() => {
                this.signInUser(
                  this.state.email,
                  this.state.password
                )   
              }}
            >
              <Text style={styles.buttonText}>Signin</Text>
            </Button>
            <View style={styles.footer}>
              <Text>OR</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("Signup")
                }}
              >
                <Text>Create New Account</Text>
              </TouchableOpacity>
            </View>
          </Form>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 100
  },
  form: {
    padding: 20,
    width: "100%",
    marginBottom: 30
  },
  button: {
    marginTop: 20
  },
  buttonText: {
    color: "#fff"
  },
  footer: {
    alignItems: "center"
  }
});