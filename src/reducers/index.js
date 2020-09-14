import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { usersReducer } from './users'
import { matchesReducer } from './matches'
import { alertsReducer } from './alerts'

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  matches: matchesReducer,
  alerts: alertsReducer,
})
