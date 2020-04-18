import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "stretch",
      marginTop: 50
    }}
    >
      <View style={{ height: 100, backgroundColor: "#2475B0" }}></View>
      <View style={{ height: 100, backgroundColor: "#10A881" }}></View>
      <View style={{ height: 100, backgroundColor: "#E74292" }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
