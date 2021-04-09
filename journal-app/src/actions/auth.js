import types from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/config'
import { finishLoading, startLoading } from "./ui"
import { useDispatch } from "react-redux"

//En si el thunk es cuando devuelves una función y no un objeto y es 
//usada para hacer dispatch a acciones sincronas despues de que se 
//complete un setTimeOut o un llamado a la base de datos es decir 
//cualquier llamada asincrona

//Funcion middleware
export const startLoginEmailPassword = (email, password) => {


  //dispatch me lo ofrece thunk instalado por npm
  return (dispatch) => {
    dispatch(startLoading())
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
        dispatch(finishLoading())
      })
      .catch(err => {
        console.log(err.message)
        dispatch(finishLoading())

      })

  }
}


//Es una funcion asincrona llamar a auth google por eso 
//hacemos un return con dispatch de thunk middleware
export const startGoogleLogin = () => {


  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(e => {
        console.log(e)
      })
  }
}

//notesé que es una función asincrona, por ende usamos return + callback
export const startRegister = (email, password, name) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        //updateProfile is of firebase for update our name
        await user.updateProfile({ displayName: name })
        console.log(user)
        dispatch(
          login(user.uid, user.displayName)
        )
      })
      .catch(e => {
        console.log(e)
      })
  }
}



//Funcion sincrona que luego trasladamos a startLoginEmailPassword()
const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName
    }
  }
}

//Funcion Logout asincrona, necesita return y callback with dispatch
export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut()
    dispatch(logout())
  }
}

export const logout = () => ({
  type: types.logout,
})



export default login