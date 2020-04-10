import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/index.scss'

import Blog from './routes/blog/'

export default function router () {
  return (
    <Router>
      <Switch>
        <Route path='/blog/:entry' component={Blog} />
      </Switch>
    </Router>
  )
}
