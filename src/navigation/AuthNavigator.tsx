import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { SignInScreen } from '../screens/SignInScreen'
import { SignUpScreen } from '../screens/SignUpScreen'

interface IProps {}

const AuthNavigator = (props: IProps) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Please Sign in',
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Sign up',
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )
}

export { AuthNavigator }
