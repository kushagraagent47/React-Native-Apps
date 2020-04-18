import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

import DiceRoller from './screens/DiceRoller'
import CurrencyConverter from './screens/CurrencyConverter'
import TicTacToe from './screens/TicTacToe'
import SpanishNumber from './screens/SpanishNumber'
import Home from './screens/Home';
import Scratch from './screens/Scratch';
const Tab = createBottomTabNavigator();

// export default class App extends React.Component {

//   render() {
//     return (
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={Home} />
//           <Tab.Screen name="DiceRoller" component={DiceRoller} />
//           <Tab.Screen name="Currency" component={CurrencyConverter} />
//           <Tab.Screen name="TicTacToe" component={TicTacToe} />
//           <Tab.Screen name="SpanishNumber" component={SpanishNumber} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-information-circle-outline';
            } else if (route.name === 'DiceRoller') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Currency') {
              iconName = focused ? 'ios-cash' : 'ios-cash';
            } else if (route.name === 'SpanishNumber') {
              iconName = focused ? 'ios-paper-plane' : 'ios-paper-plane';
            } else if (route.name === 'TicTacToe') {
              iconName = focused ? 'logo-game-controller-b' : 'logo-game-controller-b';
            } else if (route.name === 'ScratchAndWin') {
              iconName = focused ? 'md-trophy' : 'md-trophy';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="DiceRoller" component={DiceRoller} />
        <Tab.Screen name="Currency" component={CurrencyConverter} />
        <Tab.Screen name="TicTacToe" component={TicTacToe} />
        <Tab.Screen name="SpanishNumber" component={SpanishNumber} />
        <Tab.Screen name="ScratchAndWin" component={Scratch} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
