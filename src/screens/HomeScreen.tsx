import * as React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamType } from '../navigation/types'
import { AuthConsumer } from '../context/UseAuthContext'

type IProps = StackScreenProps<RootStackParamType, 'Home'>

const HomeScreen = (props: IProps) => {
  return(
    <AuthConsumer>
      {(authContext: any) => {
        const user = authContext.getUser()
        return (
          <View style={styles.container}>
            <Text>Hello</Text>
            { user && <Text>{user.email}</Text> }
            <Button title="Sign Out" onPress={authContext.signOut} />
          </View>
        )
      }}
    </AuthConsumer>
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
