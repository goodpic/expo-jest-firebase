import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { ValidatedForm } from '../components/ValidatedForm'
import { InputType } from '../components/ValidatedForm/types'

const SignUpScreen = () => {
  const inputs: InputType[] = [
    {
      key: 'id',
      label: 'User ID',
      type: 'string',
      validate: 'alphanumeric',
      required: true,
      maxLength: 20,
    },
    {
      key: 'password',
      label: 'Password',
      type: 'password',
      minLength: 6,
      validate: 'regex',
      regex: '/^[a-zA-Z0-9_]+$/'
    },
    {
      key: 'age',
      label: 'Age',
      type: 'number',
      validate: 'integer',
    }
  ]
  return(
    <View style={styles.container}>
      <Text>Sign Up</Text>
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

export { SignUpScreen }
