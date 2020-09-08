import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthScreen } from '../screens/AuthScreen'

interface IProps {}

const AuthNavigator = (props: IProps) => {
  const Stack = createStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        // screenOptions={{
        //   headerShown: false,
        // }}
      >
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            title: 'Please Sign-in',
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export { AuthNavigator }
