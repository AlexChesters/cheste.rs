import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/index.scss'

import Blog001 from './routes/blog/001'
import Blog002 from './routes/blog/002'

export default function router () {
  return (
    <Router>
      <Switch>
        <Route path='/blog/001' component={Blog001} />
        <Route path='/blog/002' component={Blog002} />
      </Switch>
    </Router>
  )
}
