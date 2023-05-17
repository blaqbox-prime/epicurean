import React, { ReactNode } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Menu from '../pages/Menu'

type Props = {
    children: ReactNode
}

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