import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Follow from './screens/Follow';
import Following from './screens/Following'
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Follow" component={Follow} />
        <Stack.Screen name="Following" component={Following} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;