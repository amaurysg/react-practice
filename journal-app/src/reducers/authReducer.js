
import React from 'react'
import types from '../types/types';

// my state first empty, next with the values uid , name 
// {
//   uid: 638dhdhdue8eg7,
//   name: 'Amaury'
// }
//First REDUCER
const authReducer = (state = {}, action) => {
  // console.log(action.type)
  switch (action.type) {
    case types.login:
      return {
        uid: action.payload.uid,
        name: action.payload.displayName
      }
    case types.logout:
      return {}

    default:
      return state
  }

}

export default authReducer
