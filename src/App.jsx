import React, { useState } from 'react'
import { NavLink, BrowserRouter, Switch, Route } from 'react-router-dom'
import Htql from './page/htqlctu'
import Home from './page/Home'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
            <Route exact path="/">
              <Home />          
            </Route>
            <Route exact path="/htql">
              <Htql></Htql>
            </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
