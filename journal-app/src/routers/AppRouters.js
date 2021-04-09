import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouters from './AuthRouters'
import { firebase } from '../firebase/config'
import { useDispatch } from 'react-redux';
import login from '../actions/auth';

const AppRouters = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  //Aqui vamos observar qué user está
  // y vamos a mantener su estado aún despues de hacer refresh
  useEffect(() => {
    //aqui creamos un observer
    //tipo de objeto que se puede disparar mas de una vez 
    firebase.auth().onAuthStateChanged((user) => {
      // console.log(user) //{info user}
      //si user tiene info...
      if (user?.uid) {
        //dispatch de funcion login
        dispatch(login(user.uid, user.displayName))
        setIsLogged(true)
      }
      setChecking(false)
    })


  }, [dispatch, setChecking, setIsLogged])


  if (checking) {
    return (
      <h1>Espere...</h1>
    )
  }

  return (

    <Router>

      <div>
        <Switch>
          <Route path='/auth' component={AuthRouters} />
          <Route exact path='/' component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>

    </Router>



  )
}

export default AppRouters
