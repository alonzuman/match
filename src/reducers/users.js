const initialState = {
  users: [],
  user: {},
  filters: {},
  loading: false,
}

export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'USERS/LOADING':
      return {
        ...state,
        loading: true
      }
    case 'USERS/STOP_LOADING':
      return {
        ...state,
        loading: false
      }
    case 'USERS/SET_USERS':
      return {
        ...state,
        users: [...payload],
        loading: false
      }
    case 'USERS/SET_USER':
      return {
        ...state,
        user: { ...payload },
        loading: false
      }
    case 'USERS/REMOVE_USER':
      return {
        ...state,
        users: [...state.users.filter(user => user.id !== payload.id)],
        loading: false
      }
    case 'USERS/FAIL':
      return {
        ...state,
        loading: false
      }
    default: return state
  }
}
