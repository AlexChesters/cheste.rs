import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/index.scss'

import Home from './routes/home'
import Blog from './routes/blog'

export default function router () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog/:entry' component={Blog} />
      </Switch>
    </Router>
  )
}
