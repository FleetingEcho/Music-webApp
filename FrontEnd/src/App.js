import React, { Fragment } from 'react'
import {
  BrowserRouter as Router,
  Switch,
} from 'react-router-dom';
import FrontendAuth from './routes/config'
function App(props) {
  return (
      <Router>
      <Switch>
        <FrontendAuth></FrontendAuth>
      </Switch>
    </Router>
  )
}

export default App
