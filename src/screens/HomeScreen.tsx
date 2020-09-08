import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'

const HomeScreen = () => {
  return(
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export { HomeScreen }
