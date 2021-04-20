import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useForm } from '../../hooks/useForm'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {

  //1- referencia a note active 
  //traemos notes del state from redux
  const { active: note } = useSelector(state => state.notes)
  // console.log(note)
  const [values, handleInputChange, reset] = useForm(note)

  const activeId = useRef(note.id)

  //Actualizara el id solo si el id es diferente al momento de darle click
  useEffect(() => {
    if (note.id !== activeId.current) {
      reset(note)
      activeId.current = note.id

    }

  }, [note, reset])

  const { body, title } = values
  console.log(body, title)



  return (
    <div className="notes__main-screen">
      <NotesAppBar />
      <div className="notes__content">

        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"
          value={title}
          onChange={handleInputChange}

        />
        <textarea
          placeholder="what happened today"
          className="notes__textarea"
          value={body}
          onChange={handleInputChange}
        >
        </textarea>
        {
          (note.url) &&
          <div className="notes__image">
            <img src="https://i.pinimg.com/736x/e9/86/87/e98687512e7a6df281b6482a553b6fc7.jpg" alt="imagen" />
          </div>

        }

      </div>
    </div>
  )
}

export default NoteScreen
