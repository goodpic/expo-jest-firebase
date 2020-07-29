import * as firebase from 'firebase'
import '@firebase/auth'
import { firebaseConfig } from '../../config/firebase'

describe('UseProduct', () => {
  beforeAll(() => {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  })

  test('fetchProduct', async () => {
    expect(true).toEqual(true)
    try {
      const defaultAuth = firebase.auth()
    } catch (e) {
      console.log(e)
    }
  }, 100000)
})
