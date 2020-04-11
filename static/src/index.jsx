import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Router from './router'

document.getElementById('app').innerHTML = ReactDOMServer.renderToStaticMarkup(
  <Router />
)
