const initialState = {
  isOn: false,
  msg: '',
  type: ''
}

export const alertsReducer = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case 'ALERTS/SET_ALERT':
      return {
        ...state,
        isOn: true,
        msg: payload.msg,
        type: payload.type
      }
    case 'ALERTS/CLEAR_ALERT':
      return {
        ...state,
        isOn: false,
        msg: '',
        type: ''
      }
    default: return state;
  }
}
