
//importamos CreateStore para crear el store
//importamos combineStore para almacenar los reducers
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/authReducer'



//En esta constante almacenamos los reducers
const reducers = combineReducers({
  auth: authReducer
})

//creamos esta const como ayuda para poder ejecutar la extension devtools
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

//creamos la store y agregamos la const reducers que internamente
//tiene los reducers.
const store = createStore(
  reducers,
  //const para devtools que encierra nuestro applyMiddleware
  composeEnhancers(applyMiddleware(thunk))
)

//exportamos
export default store