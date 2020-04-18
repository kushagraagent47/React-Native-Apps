import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import CameraApp from './screens/Camera'
import ViewImage from './screens/ViewImage'

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} initialParams={{image: "empty"}} />
        <Stack.Screen name="Camera" component={CameraApp}  />
        <Stack.Screen name="ViewImage" component={ViewImage}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;