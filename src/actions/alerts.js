export const clearAlert = () => async dispatch => {
  dispatch({
    type: 'ALERTS/CLEAR_ALERT'
  })
}

export const setAlert = ({ msg, type }) => async dispatch => {
  dispatch({
    type: 'ALERTS/SET_ALERT',
    payload: { msg, type }
  })
  setTimeout(() => {
    clearAlert()
  }, 3000);
}
