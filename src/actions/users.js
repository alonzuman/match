import firebase from 'firebase';
import { db } from "../firebase";
import store from '../store';
import { keepSwiping, newMatch } from './matches';
const usersRef = db.collection('users');

export const getUsers = filters => async dispatch => {
  const { swipes } = store.getState().auth.user
  dispatch({
    type: 'USERS/LOADING'
  });
  try {
    // console.log('filters')
    // TODO set user preferences as the filters
    // TODO add to the query 'array-not-contains' either swiped left or swiped right after uniting both arrays
    const leftAndRight = [...swipes.left, ...swipes.right]
    // TODO limit for 20 a time
    const usersSnap = await usersRef.get()
    let users = []
    usersSnap.forEach(doc => {
      if (!leftAndRight.includes(doc.id)) {
        users.push({ id: doc.id, ...doc.data() })
      }
    })
    dispatch({
      type: 'USERS/SET_USERS',
      payload: users
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'USERS/FAIL'
    })
  }
}

export const swipeUser = ({ direction, swipedUser, swipedUserSwipes }) => async dispatch => {
  const { id, user } = store.getState().auth
  const { swipes } = user;
  const userRef = db.collection('users').doc(id)
  dispatch({
    type: 'USERS/LOADING'
  });
  try {
    if (!swipes.right.includes(swipedUser.id) && !swipes.left.includes(swipedUser.id)) {
      userRef.set({
        user: {
          swipes: {
            [direction]: firebase.firestore.FieldValue.arrayUnion(swipedUser.id)
          }
        }
      }, { merge: true })
      dispatch({
        type: `AUTH/${direction === 'right' ? 'SWIPE_RIGHT' : 'SWIPE_LEFT'}`,
        payload: { id: swipedUser.id, direction }
      })
      if (swipedUserSwipes.right.includes(id) && direction === 'right') {
        dispatch(newMatch({ swipedUser, user }))
      } else {
        dispatch(keepSwiping({ swipedUser }))
      }
    }
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'USERS/FAIL'
    })
  }
}
