import { auth, db } from "../firebase"
import firebase from 'firebase'
const usersRef = db.collection('users')

export const signInWithProvider = provider => async dispatch => {
  dispatch({
    type: 'AUTH/LOADING'
  })
  try {
    const firebaseProvider = () => {
      switch (provider) {
        case 'facebook': return new firebase.auth.FacebookAuthProvider();
        case 'google': return new firebase.auth.GoogleAuthProvider();
        default: return null
      }
    }

    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(async () => {
      const res = await auth.signInWithPopup(firebaseProvider())
      const { uid, displayName, email, photoURL, phone } = res.user
      const userRef = await usersRef.doc(uid).get()
      const user = userRef.data()
      await usersRef.doc(uid).set({
        id: uid,
        email: email || '',
        user: {
          id: uid,
          displayName: displayName || '',
          photoURL: photoURL || '',
          birthDate: '',
          phone: phone || '',
          filters: {
            male: null,
            female: null,
            distance: ''
          },
          swipes: {
            left: [],
            right: []
          }
        },
        dateCreated: user?.dateCreated ? user?.dateCreated : Date.now()
      }, { merge: true })
      dispatch({
        type: 'AUTH/SET_USER',
        payload: { displayName, email, photoURL, phone, dateCreated: user?.dateCreated ? user?.dateCreated : Date.now() }
      })
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'AUTH/FAIL'
    })
  }
}

export const updateProfile = fields => async dispatch => {
  dispatch({
    type: 'AUTH/LOADING'
  })
  try {
    console.log('updating')
  } catch (error) {
    console.log(error)
  }
}

export const signIn = () => async dispatch => {
  dispatch({
    type: 'AUTH/LOADING'
  })
  try {
    console.log('signingIn')
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'AUTH/FAIL'
    })
  }
}

export const signUp = () => async dispatch => {
  dispatch({
    type: 'AUTH/LOADING'
  })
  try {
    console.log('signingUp')
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'AUTH/FAIL'
    })
  }
}

export const signOut = () => async dispatch => {
  dispatch({
    type: 'AUTH/LOADING'
  })
  try {
    console.log('signing out')
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'AUTH/FAIL'
    })
  }
}

export const setUser = user => async dispatch => {
  try {
    const { uid } = user
    const userRef = await usersRef.doc(uid).get()
    dispatch({
      type: 'AUTH/SET_USER',
      payload: { id: userRef.id, ...userRef.data() },
    })
    dispatch({
      type: 'USER/SET_USER',
      payload: { id: userRef.id, ...userRef.data().user }
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'AUTH/FAIL'
    })
  }
}

export const validateUser = () => async dispatch => {
  await auth.onAuthStateChanged(async user => {
    if (user) {
      await dispatch(setUser(user))
    } else {
      await dispatch(signOut())
    }
  })
}
