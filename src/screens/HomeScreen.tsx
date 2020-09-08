import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamType } from '../navigation/types'

type IProps = StackScreenProps<RootStackParamType, 'Home'>

const HomeScreen = (props: IProps) => {
  console.log(props)
  return(
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Sign Out</Text>
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
