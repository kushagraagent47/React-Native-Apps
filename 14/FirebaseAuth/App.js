import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as firebase from 'firebase';

import HomeScreen from './screens/HomeScreen'
import LoadingScreen from './screens/LoadingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';

var firebaseConfig = {
  apiKey: "*",
  authDomain: "*",
  databaseURL: "*",
  projectId: "*",
  storageBucket: "*",
  messagingSenderId: "*",
  appId: "*",
  measurementId: "*"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerLeft:null}}/>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerLeft:null}}/>
        <Stack.Screen name="Signin" component={SigninScreen} options={{ headerLeft:null}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerLeft:null}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;