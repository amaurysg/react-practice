
import { db } from "../firebase/config"
import { notesReducer } from "../reducers/notesReducer"


export const loadNotes = async (uid) => {
  //Solicitamos la informacion que hay en el path `${uid}/journal/notes`
  const notesSnap = await db.collection(`${uid}/journal/notes`).get()
  const notes = []
  console.log(notesSnap)

  //recorremos noteSnap con forEach
  //data() es un funcion de firebase
  notesSnap.forEach(snapChildren => {
    //a notes agregamos id: snapChildren.id (datos firebase)
    //y propagamos todo el resto de info con  ...snapChildren.data()
    notes.push({
      id: snapChildren.id,
      ...snapChildren.data()
    })

  })
  // console.log(notes)
  //en caso de que no haya nada retornará un obj vacío
  return notes

}