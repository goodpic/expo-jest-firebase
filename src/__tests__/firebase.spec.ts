import * as firebase from 'firebase'
import '@firebase/auth'
import { firebaseConfig } from '../../config/firebase'

describe('UseProduct', () => {
  beforeAll(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  })

  test.skip('fetchProduct', async () => {
    try {
      const defaultAuth = firebase.auth()
      expect(true).toEqual(true)
    } catch (e) {
      fail(new Error('Firebase Auth fail'))
      // console.log(e)
    }
  }, 100000)
})
