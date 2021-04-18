import { db } from "../firebase/config"
import types from "../types/types"

//ACTIONS NOTES !!! 
export const startNewNote = () => {
  //getState es como el useSelector, nos da acceso al state
  //getState es una funcion y un  segundo parametro en una funcion asincrona 
  //{auth, notes, ui}
  return async (dispatch, getState) => {
    //tomamos el uid de firebase gracias getState
    const uid = getState().auth.uid
    // console.log(uid)

    //creamos objeto 
    const newNote = {
      title: 'Hola nena',
      body: '',
      date: new Date().getTime()
    }
    //usabos db {firebase} .collection y asignamos ruta y colecciones 
    //que usaremos, notese que la primera es el id del user
    const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
    console.log(doc.id)

    dispatch(activeNote(doc.id, newNote))
  }
}

export const activeNote = (id, note) => ({
  type: types.notesActive,
  payload: {
    id,
    ...note,
  }


})