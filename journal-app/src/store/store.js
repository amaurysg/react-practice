
//importamos CreateStore para crear el store
//importamos combineStore para almacenar los reducers
import { createStore, combineReducers } from 'redux'
import authReducer from '../reducers/authReducer'


//En esta constante almacenamos los reducers
const reducers = combineReducers({
  auth: authReducer
})

//creamos la store y agregamos la const reducers que internamente
//tiene los reducers.
const store = createStore(reducers)

//exportamos
export default store