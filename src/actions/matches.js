import { db } from "../firebase"
import store from "../store"
import { setAlert } from "./alerts"
const matchesRef = db.collection('matches')

export const keepSwiping = ({ swipedUser }) => async dispatch => {
  dispatch({
    type: 'USERS/REMOVE_USER',
    payload: { id: swipedUser.id }
  })
}

export const newMatch = ({ swipedUser, user }) => async dispatch => {
  dispatch({
    type: 'USERS/STOP_LOADING'
  })
  dispatch({
    type: 'MATCHES/LOADING'
  })
  try {
    const match = {
      dateCreated: Date.now(),
      ids: [swipedUser.id, user.id],
      users: [swipedUser, user]
    }
    await matchesRef.add(match)
    dispatch(setAlert({
      msg: match,
      type: 'match'
    }))
    dispatch({
      type: 'MATCHES/ADD',
      payload: match
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'MATCHES/FAIL'
    })
  }
}

export const getMyMatches = () => async dispatch => {
  const { id } = store.getState().auth
  dispatch({
    type: 'MATCHES/LOADING'
  })
  try {
    const snapshot = await matchesRef.where('ids', 'array-contains', id).get()
    let matches = []
    snapshot.forEach(doc => matches.push({ id: doc.id, ...doc.data() }))
    dispatch({
      type: 'MATCHES/SET_MATCHES',
      payload: matches
    })
  } catch (error) {
    console.log(error)
    dispatch({
      type: 'MATCHES/FAIL'
    })
  }
}
