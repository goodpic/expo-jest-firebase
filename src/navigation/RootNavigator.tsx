import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AuthProvider } from '../context/UseAuthContext'
import { HomeScreen } from '../screens/HomeScreen'
import { RootStackParamType } from './types/'
import { AuthNavigator } from './AuthNavigator'

interface IProps {}

const RootNavigator = (props: IProps) => {
  const Stack = createStackNavigator<RootStackParamType>()
  return (
    <NavigationContainer>
      <AuthProvider
        AuthNavigator={AuthNavigator}
      >
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}

export { RootNavigator }
