import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Follow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      followRequest: props.route.params.followRequest
    }
  }

  render() {

    var followReq = this.props.route.params.followRequest;
    var doFollow = this.props.route.params.doFollow;
    var following = this.props.route.params.following;

    return (
      <View style={styles.container}>
        <Text>{followReq}</Text>
        {
          followReq.map((frn, index) =>
            (
              <Button
                key={frn}
                title={`Follow ${frn}`}
                onPress={() => doFollow(index)}
              />
            )
          )
        }
        <Button
          title="Go to Home page"
          onPress={() => {
            this.props.navigation.navigate('Home')
          }}
        />
        <Button
          title="Show Following"
          onPress={() => {
            this.props.navigation.navigate("Following", {
              following: following
            });
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
