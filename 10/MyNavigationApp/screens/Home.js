import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      followRequest: ["John", "Jane", "Ram", "Janice"],
      following: ["Kush"]
    }
  }

  doFollow = (index) => {
    const { followRequest, following } = this.state;

    const followNew = followRequest.splice(index, 1);
    following.push(followNew);

    this.setState({
      followRequest,
      following
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>You are following {this.state.following.length} People</Text>
        <Button
          title="Go to follow page"
          onPress={() => {
            this.props.navigation.navigate("Follow", {
              followRequest: this.state.followRequest,
              following: this.state.following,
              doFollow: this.doFollow
            });
          }}
        />

        <Button
          title="Show Followers"
          onPress={() => {
            this.props.navigation.navigate("Following", {
              following: this.state.following
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
