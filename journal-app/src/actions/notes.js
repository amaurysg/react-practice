import { db } from "../firebase/config"


export const startNewNote = () => {
  //getState es como el useSelector, nos da acceso al state
  //getState es una funcion y un  segundo parametro en una funcion asincrona 
  //{auth, notes, ui}
  return async (dispatch, getState) => {
    //tomamos el uid de firebase gracias getState
    const uid = getState().auth.uid
    console.log(uid)

    //creamos objeto 

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime()
    }
    //usabos db {firebase} .collection y asignamos ruta y colecciones 
    //que usaremos, notese que la primera es el id del user
    const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
    console.log(doc)


  }
}