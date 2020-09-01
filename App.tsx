import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import '@firebase/auth'
import { firebaseConfig } from './config/firebase'
import { RootNavigator } from './src/navigation/RootNavigator'

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  const defaultAuth = firebase.auth()
  console.log(defaultAuth)
  return (
    <RootNavigator />
  )
}
