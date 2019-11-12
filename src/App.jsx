import React from 'react'
import { createBrowserHistory } from 'history'
import { Switch, Route, Redirect, Router } from 'react-router'

import TreePage from './pages/tree'

const App = () => {
  return (
    <Router history={createBrowserHistory()}>
      <Switch>
        <Redirect exact to={'/trees'} from={'/'} />
        <Route path={'/trees'} component={TreePage} />
      </Switch>
    </Router>
  )
}

export default App
