//here defined my types
//next configured in reducer this actions! 
const types = {
  login: '[Auth] Login',
  logout: '[Auth] Logout',

  uiSetError: '[UI] Set Error',
  uiRemoveError: '[UI] Remove Error',
  uiStartLoading: '[UI] Start loading',
  uiFinishLoading: '[UI] Finish loading',

  notesAddNew: '[Notes] Add New note',
  notesActive: '[Notes] Set active note',
  notesLoad: '[Notes] Load notes',
  notesUpdated: '[Notes] Updated note',
  notesFileUrl: '[Notes] Updates image url',
  notesDeleted: '[Notes] Deleted note',
  notesLogoutCleaning: '[Notes] Logout Cleaning',


}

export default types