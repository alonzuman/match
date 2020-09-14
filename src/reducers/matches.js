const initialState = {
  matches: [],
  loading: false,
}

export const matchesReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'MATCHES/LOADING':
      return {
        ...state,
        loading: true
      }
    case 'MATCHES/SET_MATCHES':
      return {
        ...state,
        matches: payload,
        loading: false
      }
    case 'MATCHES/ADD':
      return {
        ...state,
        matches: [...state.matches, payload],
        loading: false
      }
    case 'MATCHES/REMOVE':
      return {
        ...state,
        matches: [...state.matches.filter(match => match !== payload)],
        loading: false
      }
    case 'MATCHES/FAIL':
      return {
        ...state,
        loading: false
      }
    default: return state;
  }
}
