const initialState = {
  authenticated: false,
  id: '',
  email: '',
  phone: '',
  user: {
    displayName: '',
    photoURL: '',
    gender: '',
    filters: {
      gender: {
        male: undefined,
        female: undefined,
        range: ''
      }
    },
    swipes: {
      left: [],
      right: []
    }
  },
  dateCreated: '',
  loading: true
}

export const authReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'AUTH/LOADING':
      return {
        ...state,
        loading: true
      }
    case 'AUTH/STOP_LOADING':
      return {
        ...state,
        loading: false
      }
    case 'AUTH/SIGN_UP':
    case 'AUTH/SIGN_IN':
    case 'AUTH/SET_USER':
      return {
        ...state,
        ...payload,
        authenticated: true,
        loading: false
      }
    case 'AUTH/FAIL':
      return {
        ...state,
        authenticated: false,
        loading: false
      }
    case 'AUTH/SWIPE_RIGHT':
      return {
        ...state,
        swipes: {
          left: [...state.user.swipes.left],
          right: [...state.user.swipes.right, payload.id]
        },
        loading: false
      }
    case 'AUTH/SWIPE_LEFT':
      return {
        ...state,
        swipes: {
          right: [...state.user.swipes.right],
          left: [...state.user.swipes.left, payload.id]
        },
        loading: false
      }
    default: return state;
  }
}
