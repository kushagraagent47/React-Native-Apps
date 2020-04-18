import React from 'react';

// Import Screens
import HomeScreen from './screens/HomeScreen';
import AddNewContactScreen from './screens/AddNewContactScreen.js';
import EditContactScreen from './screens/EditContactScreen.js';
import ViewContactScreen from './screens/ViewContactScreen.js';

// ReactNative
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerStyle: { backgroundColor: "#B83227"}}}/>
        <Stack.Screen name="AddNewContactScreen" component={AddNewContactScreen} options={{ headerStyle: { backgroundColor: "#B83227"}}}  />
        <Stack.Screen name="EditContactScreen" component={EditContactScreen} options={{ headerStyle: { backgroundColor: "#B83227"}}} />
        <Stack.Screen name="ViewContactScreen" component={ViewContactScreen} options={{ headerStyle: { backgroundColor: "#B83227"}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
