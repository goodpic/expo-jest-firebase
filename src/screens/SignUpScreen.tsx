import * as React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { ValidatedForm } from '../components/ValidatedForm'
import { InputType } from '../components/ValidatedForm/types'
import { AuthConsumer } from '../context/UseAuthContext'
import { RootStackParamType } from '../navigation/types'

type IProps = StackScreenProps<RootStackParamType, 'SignUp'>

const SignUpScreen = (props: IProps) => {
  const inputs: InputType[] = [
    {
      key: 'id',
      label: 'Email',
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
    }
  ]

  function renderSignUp(authContext: any) {
    return (
      <View style={styles.container}>
      <Text>Create a new user</Text>
      <ValidatedForm
        inputs={inputs}
        submitButtonTitle='Sign Up'
        onSubmit={(params: any) => {
          authContext.signUp(params)
        }}
      />
    </View>
    )
  }

  return(
    <AuthConsumer>
      {(authContext: any) => {
        console.log(authContext.getUser())
        return renderSignUp(authContext)
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

export { SignUpScreen }
