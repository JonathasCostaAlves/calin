import React from 'react';
import './App.css';
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
