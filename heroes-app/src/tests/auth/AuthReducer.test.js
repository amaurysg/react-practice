import AuthReducer from "../../auth/AuthReducer"
import types from "../../types/types"

describe('Test in AutReducer', () => {

  test('Debe retornar el estado por defecto', () => {
    //Definded initial state
    const state = AuthReducer({ logged: false }, {})
    //In initial state must be {logged: false}
    expect(state).toEqual({ logged: false })



  })
  test('Debe autenticar y colocar el name del usuario', () => {
    //Defined me action with types.login
    const action = {
      type: types.login,
      payload: {
        name: 'anyname'
      }
    }
    //Here actual o initial state = {logged: false} + action above 
    const state = AuthReducer({ logged: false }, action)
    //after action expect  state as { logged: true, name: 'anyname' }
    expect(state).toEqual({ logged: true, name: 'anyname' })

  })
  test('Debe borrar el name del user y logged in false', () => {

    //Defined me action with types.logout
    const action = {
      type: types.logout,

    }

    //Here actual o initial state = {logged: true, name: 'Pedro'} + action above 
    const state = AuthReducer({ logged: true, name: 'Pedro' }, action)
    //after action expect  state as {logged:false}
    expect(state).toEqual({ logged: false })

  })


})
