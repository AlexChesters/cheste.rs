import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/index.scss'

import Home from './routes/home'
import BlogEntry from './routes/blog-entry'

export default function router () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/blog/:entry' component={BlogEntry} />
      </Switch>
    </Router>
  )
}
