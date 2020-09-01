import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { ValidatedForm } from '../components/ValidatedForm/'

const AuthScreen = () => {
  const inputs = [
    {
      key: 'id',
      label: 'User ID',
      type: 'string',
      validate: 'alphanumeric',
      required: true,
    },
    {
      key: 'password',
      label: 'Password',
      type: 'password',
      validate: 'regex',
      regex: '/^[a-zA-Z0-9_]+$/'
    },
    {
      key: 'age',
      label: 'Age',
      type: 'number',
      validate: 'numeric',
    }
  ]
  return(
    <View style={styles.container}>
      <Text>Auth Screen</Text>
      <ValidatedForm
        inputs={inputs}
      />
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

export { AuthScreen }
