import React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Landing from '../views/landing/Landing'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router