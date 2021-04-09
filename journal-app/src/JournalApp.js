import React from 'react'
//importamos Provider de react-redux
import { Provider } from 'react-redux'
//importamos la store
import store from './store/store'

import AppRouters from './routers/AppRouters'

const JournalApp = () => {
  return (

    <Provider store={store}>
      <AppRouters />
    </Provider >


  )
}

export default JournalApp
