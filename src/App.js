import React from 'react';
import './App.css';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import { BrowserRouter as Route } from 'react-router-dom'


import Routes from './config/Routes'; 

function App() {
  return (
   <Route >
    <Routes/>
  </Route>
  );
}

export default App;
