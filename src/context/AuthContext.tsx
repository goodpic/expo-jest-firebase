import * as React from 'react'
import { createContext, useEffect, useMemo, useReducer } from 'react'
import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase'
import '@firebase/auth'
import { firebaseConfig } from '../../config/firebase'
import { AuthNavigator } from '../navigation/AuthNavigator'

const AuthProvider = (props: any) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
  }
  const defaultAuth = firebase.auth()

  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);

  const authContext = useMemo(
    () => ({
      signIn: async (data: any) => {
        console.log(data)
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (data: any) => {
        dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' });
      },
    }),
    []
  )
  console.log(defaultAuth.currentUser)
  const AuthContext = createContext(authContext)
  return (
    <AuthContext.Provider value={authContext}>
      {defaultAuth.currentUser ? props.children : <AuthNavigator />}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
