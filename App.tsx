import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import '@firebase/auth'
import { firebaseConfig } from './config/firebase'

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  const defaultAuth = firebase.auth()
  console.log(defaultAuth)
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
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
