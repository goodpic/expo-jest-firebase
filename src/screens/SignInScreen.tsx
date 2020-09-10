import * as React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import { Text } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { ValidatedForm } from '../components/ValidatedForm'
import { InputType } from '../components/ValidatedForm/types'
import { RootStackParamType } from '../navigation/types'
import { AuthConsumer } from '../context/UseAuthContext'

type IProps = StackScreenProps<RootStackParamType, 'SignIn'>

const SignInScreen = (props: IProps) => {
  const { route, navigation } = props
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
    }
  ]

  function renderSignIn(authContext: any) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ValidatedForm
          inputs={inputs}
          submitButtonTitle='Sign In'
          onSubmit={() => {
            if (authContext && authContext.signIn) authContext.signIn()
          }}
        />
        <Text>Do not have an account?</Text>
        <Text onPress={() => navigation.navigate({
          name: 'SignUp',
          params: {},
        })}>Sign up</Text>
      </ScrollView>
    )
  }

  return(
    <AuthConsumer>
      {(authContext: any) => {
        console.log(authContext.getUser())
        return renderSignIn(authContext)
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

export { SignInScreen }
