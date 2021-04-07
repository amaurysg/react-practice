import React from 'react';
import ReactDOM from 'react-dom';
import JournalApp from './JournalApp';
import '../src/styles/styles.scss'
import AppRouters from './routers/AppRouters';


ReactDOM.render(
  <AppRouters />, document.getElementById('root')
);


