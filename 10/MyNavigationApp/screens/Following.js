import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Following extends React.Component {

  render() {

    var following = this.props.route.params.following;
    return (
      <View style={styles.container}>
        <Text>{following.length}</Text>
        {
          following.map((frn, index) =>
            (
              <Button
                key={frn}
                title={ `Follow ${frn}`}
              />
            )
          )
        }
        <Button 
          title="Go to Home page"
          onPress = { () => {
            this.props.navigation.navigate('Home')
          }}
        />
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
