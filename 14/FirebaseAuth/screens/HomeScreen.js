import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import * as firebase from 'firebase';
import { Button } from 'native-base';

export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      uid: ""
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(authenticate => {
      if(authenticate) {
        this.setState({
          email: authenticate.email,
          name: authenticate.displayName,
          uid: authenticate.uid
        })
      } else {
        this.props.navigation.navigate("Signin")
      }
    })
  }

  signOutUser = () => {
    firebase
    .auth()
    .signOut()
    .then
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
        <Button block
        onPress={() => {
          this.signOutUser();
        }}
        >
          <Text>Signout</Text>
        </Button>
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
});
