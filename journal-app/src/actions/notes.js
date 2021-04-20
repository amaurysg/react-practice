import { db } from "../firebase/config"
import { loadNotes } from "../helpers/loadNotes"
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
//Queremos activar note
export const activeNote = (id, note) => ({
  //definimos el type y el payload
  type: types.notesActive,
  payload: {
    id,
    ...note,
  }
})
//optimización para no ejecutar esto en appRouters
export const startLoadingNotes = (uid) => {
  return async (dispatch) => {
    const notes = await loadNotes(uid)
    dispatch(setNotes(notes))


  }
}

//notes 
export const setNotes = (notes) => ({
  type: types.notesLoad,
  payload: notes
})
//de aqui nos vamos a notesReducer para saber que hacer

export const startSaveNote = (note) => {

  return async (dispatch, getState) => {

    const { uid } = getState().auth

    if (!note.url) {
      delete note.url
    }

    const noteToFirestore = { ...note }
    delete noteToFirestore.id

    await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore)


  }
}