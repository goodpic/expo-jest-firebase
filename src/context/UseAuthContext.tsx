import * as React from 'react'
import { createContext, useEffect, useMemo, useReducer } from 'react'
// import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase'
import '@firebase/auth'
import { firebaseConfig } from '../../config/firebase'

const AuthContext = createContext({})
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const AuthProvider = (props: any) => {
  const [state, dispatch] = useReducer(
    (prevState: any, action: any) => {
      console.log(action);
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          }
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          }
        case 'SIGN_UP':
          console.log('SIGN_UP reduced')
          return {
            ...prevState,
            isSignout: false,
            userToken: null,
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  )

  useEffect(() => {
    console.log('UseAuthContext: useEffect');
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      // let userToken
      // try {
      //   userToken = await AsyncStorage.getItem('userToken')
      // } catch (e) {
      //   // Restoring token failed
      // }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // dispatch({ type: 'RESTORE_TOKEN', token: userToken })
    }
    bootstrapAsync()
  }, [])

  const defaultAuth = firebase.auth()

  const authContext = useMemo(
    () => ({
      signIn: async (email: string, password: string) => {
        defaultAuth.signInWithEmailAndPassword(email, password)
          .then((result: any) => {
            dispatch({ type: 'SIGN_IN', token: 'dummy-auth-token' })
          })
          .catch(function(error) {
            console.log(error)
          })
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async (email: string, password: string) => {
        defaultAuth.createUserWithEmailAndPassword(email, password)
          .then((result: any) => {
            dispatch({ type: 'SIGN_UP', token: 'dummy-auth-token' })
          })
          .catch(function(error) {
            console.log(error)
          })
      },
      getUser: () => defaultAuth.currentUser,
    }), []
  )
  return (
    <AuthContext.Provider value={authContext}>
      {defaultAuth.currentUser ? props.children : props.AuthNavigator()}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer

export { AuthConsumer, AuthProvider }
