import types from "../types/types"
import { firebase, googleAuthProvider } from '../firebase/config'


//En si el thunk es cuando devuelves una función y no un objeto y es 
//usada para hacer dispatch a acciones sincronas despues de que se 
//complete un setTimeOut o un llamado a la base de datos es decir 
//cualquier llamada asincrona

//Funcion middleware
export const startLoginEmailPassword = (email, password) => {
  //dispatch me lo ofrece thunk instalado por npm
  return (dispatch) => {
    setTimeout(() => {
      //dispatch de la store
      //en el cuerpo hay una funcion sincrona
      dispatch(login(123, 'ama'))

    }, 3500)
  }
}

//Es una funcion asincrona llamar a auth google por eso 
//hacemos un return con dispatch
export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase.auth().signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(
          login(user.uid, user.displayName)
        )
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

export default login