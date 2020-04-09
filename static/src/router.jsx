import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/index.scss'

import Blog001 from './routes/blog/001'

export default function router () {
  return (
    <Router>
      <Switch>
        <Route path='/blog/001' component={Blog001} />
      </Switch>
    </Router>
  )
}
