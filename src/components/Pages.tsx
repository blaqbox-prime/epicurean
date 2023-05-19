import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'


function Pages() {


  return (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/menu" >
            <Menu />
        </Route>
    </Switch>
  )
}

export default Pages