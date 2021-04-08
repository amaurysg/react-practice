import React from 'react'
import NotesAppBar from './NotesAppBar'

const NoteScreen = () => {
  return (
    <div className="notes__main-screen">
      <NotesAppBar />
      <div className="notes__content">

        <input
          type="text"
          placeholder="Some awesome title"
          className="notes__title-input"

        />
        <textarea
          placeholder="what happened today"
          className="notes__textarea"
        >
        </textarea>

        <div className="notes__image">
          <img src="https://i.pinimg.com/736x/e9/86/87/e98687512e7a6df281b6482a553b6fc7.jpg" alt="imagen" />
        </div>

      </div>
    </div>
  )
}

export default NoteScreen
