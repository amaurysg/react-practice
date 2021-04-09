import types from "../types/types"


export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    setTimeout(() => {

      dispatch(login(123, 'ama@ama'))
    },

      3500)
  }
}

const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}

export default login